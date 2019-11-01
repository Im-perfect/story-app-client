import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
