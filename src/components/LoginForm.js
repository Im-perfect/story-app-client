import React from "react";
// import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.props.onSubmit}>
          <label>
            <input
              type="text"
              name="username"
              value={this.props.login.username}
              onChange={this.props.onChange}
              className="input"
              placeholder="USERNAME"
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={this.props.login.password}
              onChange={this.props.onChange}
              className="input"
              placeholder="PASSWORD"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="button primary"
          ></input>
        </form>
      </div>
    );
  }
}
