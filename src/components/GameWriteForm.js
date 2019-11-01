import React from "react";
import request from "superagent";
import { baseUrl } from "../actions/url";
import { connect } from "react-redux";

class GameWriteForm extends React.Component {
  state = {
    message: "",
    charCount: 255,
    placeholder: this.props.disabled
      ? "Your co-writer's turn now"
      : "Your turn to write the next line"
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
      <div className="write-form">
        <p>{this.state.charCount} character(s) left</p>
        <form onSubmit={this.onSubmit}>
          <textarea
            rows="4"
            cols="50"
            type="text"
            placeholder={this.state.placeholder}
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
            className="button primary"
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
