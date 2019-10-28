import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signout } from "../actions/player";

class HeaderBar extends React.Component {
  // signUp = () => {
  //   //return <Redirect to="/signup" />;
  //   this.props.history.push("/signup");
  // };

  signOut = () => {
    this.props.signout();
    return <Redirect to="/" />;
  };

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Story App</Link>
        </h1>
        {this.props.signedIn ? (
          <button onClick={this.signOut}>Sign out</button>
        ) : (
          <div>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
            <Link to="/login">
              <button>Log in</button>
            </Link>
          </div>
        )}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signedIn: !!state.currentPlayer
});

export default connect(
  mapStateToProps,
  { signout }
)(HeaderBar);
