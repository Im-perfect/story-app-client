import React from "react";
import request from "superagent";
import { baseUrl } from "../actions/url";
import { connect } from "react-redux";

class GameWriteForm extends React.Component {
  state = {
    message: "",
    charCount: 255
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
        message: "",
        charCount: 255
      });
    }
  };

  onChange = event => {
    this.setState({
      message: event.target.value,
      charCount: this.state.charCount - 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.charCount} character(s) left</p>
        <form onSubmit={this.onSubmit}>
          <textarea
            rows="4"
            cols="50"
            type="text"
            placeholder="Type your next line here"
            name="messageForm"
            onChange={this.onChange}
            value={this.state.message}
            disabled={this.props.disabled}
            maxLength="255"
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
