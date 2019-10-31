import React, { Component } from "react";
import { connect } from "react-redux";
import { setGame, addMessages } from "../actions/game";
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
            {`Story title: ${title} ${player1} with ${player2}`}
            <ul>
              {this.props.messages.map(message => (
                <li key={message.id}>{message.text}</li>
              ))}
            </ul>
            {this.props.me === this.props.playerTurn ? (
              <GameWriteForm gameId={this.props.match.params.id} />
            ) : null}
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
  addMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
