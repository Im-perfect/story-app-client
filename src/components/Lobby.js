import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { baseUrl } from "../actions/url";
import { addLobbies, join } from "../actions/lobby";

class Lobby extends React.Component {
  state = {
    lobbies: []
  };

  source = new EventSource(`${baseUrl}/lobbies`); //setup the stream!!!

  componentDidMount() {
    this.source.onmessage = event => {
      // console.log("got a lobby", event);
      const lobbies = JSON.parse(event.data);
      console.log(lobbies);
      //   this.setState({
      //     lobbies
      //   });
      this.props.addLobbies(lobbies);
    };
  }

  renderGame = (game, index) => (
    <li key={game.id}>
      <h1>{index+1}</h1>
      <p>Room: {game.name}</p>
      <h3>{game.storyTitle}</h3>
      <p>{game.storyDescription}</p>
      {game.status === "waiting" ? (
        <button onClick={() => this.joinGame(game.id)} className="button primary light">Join</button>
      ) : (
        <h5>FULL</h5>
      )}
    </li>
  );

  handleAddLobby = event => {
    this.props.history.push("/create-game");
  };

  joinGame = gameId => {
    (async () => {
      await this.props.join(gameId, this.props.playerJWT);
      this.props.history.push(`/game/${gameId}`);
    })();
  };

  render() {
    if (!this.props.isLoggedIn) return "Loading...";
    return (
      <div className="lobbyContainer">
        <h2>Choose a lobby to join</h2>
        <p className="small">OR</p>
        <button onClick={this.handleAddLobby} className="button primary">
          <span>+ </span>Create a new game
        </button>
        <ul>{this.props.games.map(this.renderGame)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.lobby,
  isLoggedIn: !!state.currentPlayer,
  playerJWT: state.currentPlayer
});

export default connect(
  mapStateToProps,
  { addLobbies, join }
)(Lobby);
