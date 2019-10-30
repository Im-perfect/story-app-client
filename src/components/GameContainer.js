import React, { Component } from "react";
import { connect } from "react-redux";
import { getGame } from "../actions/game";
import { baseUrl } from "../actions/url";

class GameContainer extends Component {
  state = {
    startGame: false
  };

  source = new EventSource(`${baseUrl}/lobbies/${this.props.match.params.id}`); //setup the stream!!!

  componentDidMount() {
    const gameId = this.props.match.params.id;
    this.props.getGame(gameId);

    this.source.onmessage = event => {
      const game = JSON.parse(event.data);
      console.log("GAME", game);
      this.setState({
        startGame: game.player1 && game.player2 ? true : false
      });
      //this.props.addMessages(messages);
    };
  }

  render() {
    const player1 = this.props.currentGame.player1 || "New Player";
    const player2 = this.props.currentGame.player2 || "New Player";

    return (
      <div>
        {!this.state.startGame
          ? "Waiting for another player..."
          : `Game: ${player1} with ${player2}`}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentGame: state.currentGame
});

const mapDispatchToProps = {
  getGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
