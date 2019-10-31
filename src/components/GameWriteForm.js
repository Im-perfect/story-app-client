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
    if (this.state.message) {
      request
        .post(`${baseUrl}/texts`)
        .set("playerJWT", this.props.currentPlayer)
        .send({
          lobbyId: this.props.gameId,
          text: this.state.message
        })
        .catch(error => console.log(error));

      this.setState({
        message: ""
      });
    }
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
          <textarea
            rows="4" cols="50"
            type="text"
            placeholder="Type your next line here"
            name="messageForm"
            onChange={this.onChange}
            value={this.state.message}
            disabled={this.props.disabled}
          ></textarea>
          <input
            type="submit"
            value="Submit"
            disabled={this.props.disabled}
          ></input>
        </form>
      </div>
    );
  }
}

export default connect(({ currentPlayer, currentGame }) => ({
  currentPlayer,
  currentGame
}))(GameWriteForm);
