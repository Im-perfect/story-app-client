import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getGame} from '../actions/game'

class GameContainer extends Component {
    state = {
        startGame: false
    }

    //source = new EventSource(`${url}/game/:id/stream`); //setup the stream!!!

    componentDidMount(){
        const gameId = this.props.match.params.id
        this.props.getGame(gameId)

        // this.source.onmessage = event => {
        //     //console.log("got a message", event);
        //     const messages = JSON.parse(event.data);
        //     this.setState({
        //       messages
        //     });
        //     this.props.addMessages(messages);
        //   };
    }

    quitGame = () => {
        const gameId = this.props.match.params.id
        console.log(gameId)
    }

    render() {
        const player1 = this.props.currentGame.player1 || "New Player"
        const player2 = this.props.currentGame.player2 || "New Player"
        
        return (
            <div>
                {!this.state.startGame ? "Waiting for another player..." : `Game: ${player1} with ${player2}` }
                <button onClick={this.quitGame()}>Quit game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentGame: state.currentGame
})

const mapDispatchToProps = {
    getGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
