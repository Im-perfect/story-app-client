import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  handleWriteNowButton = () => {
      if(this.props.currentPlayer) {this.props.history.push("/game");}
      else {this.props.history.push("/signup");}
  };
  render() {
    return (
      <div className="home-container">
        <div>
          <img
            src={require("../leaves.jpeg")}
            alt="leaves"
            className="image-1"
          />
        </div>
        <div>
          <div>
            <img
              src={require("../typewriter.jpeg")}
              alt="typewriter"
              className="image-2"
            />
          </div>
          <div className="home-heading">
            <h2>Welcome to our app</h2>
            <p>
              Have you always wanted to write a story together with your
              friends, or do you dare to collaborate with a random stranger?
              This is the app for you! Create or join a writing room, take turns
              in writing a new sentence, and say yes!
            </p>
            <button
              className="button primary left"
              onClick={this.handleWriteNowButton}
            >
              WRITE NOW
            </button>
          </div>
        </div>
        <div className="quote">
          <h2>
            “The best stories are written together” <br /> - LadyWriter1990
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    currentPlayer: !!state.currentPlayer
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
