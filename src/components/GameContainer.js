import React, { Component } from "react";
import { connect } from "react-redux";
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
    const gameId = this.props.match.params.id;

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
      <div>
        {!this.state.startGame ? (
          "Waiting for another player..."
        ) : (
          <div>
            <h5>Room name: {this.props.currentGame.name}</h5>
            <h1>{`Story title: ${title}`}</h1>
            <h4>{`${player1} with ${player2}`}</h4>
            <p>{this.props.currentGame.storyDescription}</p>

            <ul>
              {this.props.messages.map(message => (
                <li key={message.id}>{message.text}</li>
              ))}
            </ul>
            {this.props.me === this.props.playerTurn ? (
              <GameWriteForm
                gameId={this.props.match.params.id}
                disabled={false}
              />
            ) : (
              <GameWriteForm
                gameId={this.props.match.params.id}
                disabled={true}
              />
            )}
          </div>
        )}
        <button onClick={this.quitGame}>Quit game</button>
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
