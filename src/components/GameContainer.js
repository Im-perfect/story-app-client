import React, { Component } from "react";
import { connect } from "react-redux";
import { getGame, updateCurrentGame } from "../actions/game";
import { baseUrl } from "../actions/url";

class GameContainer extends Component {
  state = {
    currentGame: {},
    startGame: false
  };

  source = new EventSource(`${baseUrl}/lobboies/:id`); //setup the stream!!!

  componentDidMount() {
    const gameId = this.props.match.params.id;
    //this.props.getGame(gameId)

    this.source.onmessage = event => {
      console.log("got a message", event.data);
      const currentGame = JSON.parse(event.data);
      // this.setState({
      //   currentGame,
      //   startGame: player1 && player2 ? true: false
      // });
      //this.props.updateCurrentGame(currentGame);
    };
  }

  quitGame = () => {
    const gameId = this.props.match.params.id;
    console.log(gameId);
    //this.props.quit();
    this.props.history.push("/game");
  };

  render() {
    const player1 = this.props.currentGame.player1 || "New Player";
    const player2 = this.props.currentGame.player2 || "New Player";

    return (
      <div>
        {!this.state.startGame
          ? "Waiting for another player..."
          : `Game: ${player1} with ${player2}`}
        <button onClick={this.quitGame}>Quit game</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentGame: state.currentGame
});

const mapDispatchToProps = {
  getGame,
  updateCurrentGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
