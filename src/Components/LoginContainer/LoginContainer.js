import React, { Component } from "react";
import "./LoginContainer.css";
import LoginForm from "../LoginForm/LoginForm";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <div className="login-container">
        <h1 className="app-title"> teller. </h1>
        <p>Your Personal Crypto Analyst</p>
        <div className="button-box">
          <button className="login"> Log in </button>
          <button className="register"> Register </button>
          <p className="skip" onClick={this.props.loggedIn}>
            Skip
          </p>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
