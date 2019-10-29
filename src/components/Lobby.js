import React from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {baseUrl} from '../actions/url'
import {addLobbies} from '../actions/lobby'

class Lobby extends React.Component {
  state={
    lobbies: []
  }
  
  source = new EventSource(`${baseUrl}/lobbies`); //setup the stream!!!

  componentDidMount() {
     this.source.onmessage = event => {
           // console.log("got a lobby", event);
             const lobbies = JSON.parse(event.data);
             console.log(lobbies)
          //   this.setState({
          //     lobbies
          //   });
             this.props.addLobbies(lobbies);
           };
  }

  renderGame = game => (
    <li key={game.id}>
      <p>{game.name}</p>
      {/* <h3>{game.title}</h3>
      <p>{game.description}</p> */}
      {game.status === null || "waiting" ? <button onClick={this.joinGame}>Join</button> : <h3>FULL</h3>}
    </li>
  );
  
  handleAddLobby = (event) => {
    this.props.history.push('/create-game')
  }

  joinGame = (gameId) => <Redirect to={`/games/${gameId}`} />

  render() {
    if (!this.props.isLoggedIn) return null
    return (
      <div>
        <h1>Lobby</h1>
        <ul>{this.props.games.map(this.renderGame)}</ul>
        <button onClick={this.handleAddLobby}><span>+</span>Create a new game</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ games: state.lobby, isLoggedIn: !!state.currentPlayer });

export default connect(
  mapStateToProps,{addLobbies}
)(Lobby);
