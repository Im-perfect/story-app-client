import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../actions/player";

class HeaderBar extends React.Component {
  signOut = event => {
    this.props.signout();
    this.quitGame();
    this.props.history.push("/");
  };

  quitGame = () => {
    if(this.props.gameId) {
      console.log("quit game", this.props.gameId);
      //this.props.quit()
    } else return
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
  signedIn: !!state.currentPlayer,
  gameId: state.currentGame.id || null
});

export default withRouter(
  connect(
    mapStateToProps,
    { signout }
  )(HeaderBar)
);
