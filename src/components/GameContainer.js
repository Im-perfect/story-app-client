import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setGame, addMessages } from "../actions/game";
import { quit } from "../actions/lobby";
import { baseUrl } from "../actions/url";
import GameWriteForm from "./GameWriteForm";

class GameContainer extends Component {
  state = {
    startGame: false,
    messages: []
  };

  source = new EventSource(`${baseUrl}/lobbies/${this.props.match.params.id}`); //setup the stream!!!

  componentDidMount() {
    this.source.onmessage = event => {
      const game = JSON.parse(event.data);
      console.log("GAME", game);
      console.log("CURRENTGAME", this.props.currentGame);
      this.props.setGame(game);

      this.setState({
        startGame: game.player1 && game.player2 ? true : false,
        messages: game.texts
      });
      this.props.addMessages(game.texts);
    };
  }

  quitGame = () => {
    const gameId = this.props.match.params.id;
    this.props.quit(gameId);
    this.props.history.push("/game");
  };

  render() {
    const title = this.props.currentGame.storyTitle || "New Title";
    const player1 = this.props.currentGame.player1 || "New Player";
    const player2 = this.props.currentGame.player2 || "New Player";

    return (
      <div className="game-container">
        {this.props.currentGame.player1 === null &&
        this.props.currentGame.player2 === null ? (
          <div>
            <p>Your co-writer quit the game.</p>
            <Link to="/game">
              <button className="button primary">Back to lobby list</button>
            </Link>
          </div>
        ) : (
          <div>
            {!this.state.startGame ? (
              "Waiting for another player..."
            ) : (
              <div className="game-content">
                <h5>Room name: {this.props.currentGame.name}</h5>
                <p>Story title</p>
                <h1>{`${title}`}</h1>
                {/* <h4>{`${player1} with ${player2}`}</h4> */}
                <p className="desc">
                  {this.props.currentGame.storyDescription}
                </p>

                <ul className="story-line-container">
                  {this.props.messages.map(message => (
                    <li key={message.id}>{message.text}</li>
                  ))}
                </ul>

                <GameWriteForm
                  gameId={this.props.match.params.id}
                  disabled={this.props.me === this.props.playerTurn}
                />
              </div>
            )}
            <button onClick={this.quitGame} className="button primary">
              Quit game
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentGame: state.currentGame,
  messages: state.messages,
  playerTurn: state.playerTurn,
  me: state.me
});

const mapDispatchToProps = {
  setGame,
  addMessages,
  quit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
