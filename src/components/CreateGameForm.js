import React, { Component } from "react";
import { connect } from "react-redux";
import { addLobby } from "../actions/lobby";

class CreateGameForm extends Component {
  state = {
    title: "",
    place: "",
    character: "",
    verb: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const storyInfo = {
      title: this.state.title,
      description: `Once upon a time, at ${this.state.place}, a ${this.state.character} ${this.state.verb}.`
    };
    this.props.addLobby(storyInfo);
    this.setState({
      title: "",
      place: "",
      character: "",
      verb: ""
    });
    this.props.history.push(`/game/${this.props.gameId}`);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </label>
          <p>Once upon a time, </p>
          <label>
            at (place)
            <input
              type="text"
              name="place"
              value={this.state.place}
              onChange={this.onChange}
            />
          </label>
          <label>
            a (character)
            <input
              type="text"
              name="character"
              value={this.state.character}
              onChange={this.onChange}
            />
          </label>
          <label>
            (verb)
            <input
              type="text"
              name="verb"
              value={this.state.verb}
              onChange={this.onChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({gameId: state.lobby[state.lobby.length-1].id});

const mapDispatchToProps = { addLobby };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGameForm);
