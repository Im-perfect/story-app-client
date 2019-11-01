import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../actions/player";
import { quit } from "../actions/lobby";

class HeaderBar extends React.Component {
  signOut = event => {
    this.props.signout();
    this.quitGame();
    this.props.history.push("/");
  };

  quitGame = () => {
    if (this.props.gameId) {
      console.log("quit game", this.props.gameId);
      this.props.quit(this.props.gameId);
      this.props.history.push("/");
    } else return;
  };

  render() {
    return (
      <div className="header-bar">
        <h1>
          <Link to="/"><span>&#10084;</span>{" "}Storylike{" "}<span>&#10084;</span></Link>
        </h1>
        {this.props.signedIn ? (
          <button onClick={this.signOut} className="button">Sign out</button>
        ) : (
          <div>
            <Link to="/signup">
              <button className="button">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="button">Log in</button>
            </Link>
          </div>
        )}
        <div className="bg-block"></div>
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
    { signout, quit }
  )(HeaderBar)
);
