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

    render() {
        if (!this.state.startGame) return "Waiting for another player..."
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    getGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
