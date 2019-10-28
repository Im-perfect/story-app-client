import React from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Lobby extends React.Component {

  renderGame = game => (
    <li key={game.id}>
      <h3>{game.story.title}</h3>
      <p>{game.story.description}</p>
      {game.status === "waiting" ? <button onClick={this.joinGame}>Join</button> : <h3>FULL</h3>}
    </li>
  );
  
  handleAddLobby = (event) => {
    this.props.history.push('/create-game')
  }

  joinGame = (gameId) => <Redirect to={`/games/${gameId}`} />

  render() {
    return (
      <div>
        <h1>Lobby</h1>
        <ul>{this.props.games.map(this.renderGame)}</ul>
        <button onClick={this.handleAddLobby}><span>+</span>Create a new game</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ games: state.lobby, currentPlayer: state.currentPlayer });

export default connect(
  mapStateToProps
)(Lobby);
