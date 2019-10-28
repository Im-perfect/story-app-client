import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, withRouter } from "react-router-dom";
import { signout } from "../actions/player";

class HeaderBar extends React.Component {

  signOut = (event) => {
    this.props.signout();
    this.props.history.push('/game/create')
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

export default withRouter(connect(
  mapStateToProps,
  { signout }
)(HeaderBar));
