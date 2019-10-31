import React from "react";
import request from "superagent";
import { baseUrl } from "../actions/url";
import { connect } from "react-redux";

class GameWriteForm extends React.Component {
  state = {
    message: ""
  };

  onSubmit = event => {
    event.preventDefault();
    request
      .post(`${baseUrl}/texts`)
      .set("playerJWT", this.props.currentPlayer)
      .send({
        lobbyId: this.props.gameId,
        text: this.state.message
      })
      .then(() => {
        this.setState({
          message: ""
        });
      })
      .catch(error => console.log(error));
  };

  onChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Type your next line here"
            name="messageForm"
            onChange={this.onChange}
            value={this.state.message}
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default connect(({ currentPlayer, currentGame }) => ({
  currentPlayer,
  currentGame
}))(GameWriteForm);
