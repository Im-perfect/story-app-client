import React, { Component } from "react";
import { connect } from "react-redux";
import { addLobby } from "../actions/lobby";
import { fillRandom } from "../actions/lobby";

class CreateGameForm extends Component {
  state = {
    name: "",
    title: "",
    place: "",
    character: "",
    verb: "",
    noun: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, title, place, character, verb, noun } = this.state;
    if (
      name === "" ||
      title === "" ||
      place === "" ||
      character === "" ||
      verb === "" ||
      noun === ""
    ) {
      return; //error handling
    }
    const gameInfo = {
      name: name,
      title: title,
      description: `Once apon a time in ${place}, a ${character} was born to ${verb} a ${noun}.`
    };

    (async () => {
      const id = await this.props.addLobby(gameInfo, this.props.playerJWT);
      this.props.history.push(`/game/${id}`);
    })();

    this.setState({
      name: "",
      title: "",
      place: "",
      character: "",
      verb: "",
      noun: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRandom = async () => {
    const res = await fillRandom();
    this.setState(res);
  };

  render() {
    return (
      <div className="create-game-container">
        <form onSubmit={this.onSubmit}>
          <label>
            Room Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              className="input"
            />
          </label>
          <hr />
          <br />
          <label>
            <strong>Story Title</strong>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              className="input"
            />
          </label>
          <br />
          <label>
            Once upon a time in{" "}
            <input
              type="text"
              name="place"
              value={this.state.place}
              onChange={this.onChange}
              className="input"
              placeholder="place"
            />
          </label>
          <label>
            {" "}
            a{" "}
            <input
              type="text"
              name="character"
              value={this.state.character}
              onChange={this.onChange}
              className="input"
              placeholder="character"
            />
          </label>
          <label>
            {" "}
            was born to
            <input
              type="text"
              name="verb"
              value={this.state.verb}
              onChange={this.onChange}
              className="input"
              placeholder="verb"
            />
          </label>
          <label>
            {" "}
            a{" "}
            <input
              type="text"
              name="noun"
              value={this.state.noun}
              onChange={this.onChange}
              className="input"
              placeholder="noun"
            />
            .
          </label>
          <br />
          <input type="submit" value="Submit" className="button primary" />
        </form>
        <button onClick={this.handleRandom} className="button primary">
          Fill in with random ideas
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerJWT: state.currentPlayer
});

const mapDispatchToProps = { addLobby };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGameForm);
