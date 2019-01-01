import React, { Component } from "react";
import "./LoginContainer.css";
import LoginForm from "../LoginForm/LoginForm";
import { NavLink } from "react-router-dom";

class LoginContainer extends Component {
  constructor({ props, loggedIn }) {
    super(props);
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
        <div className="form-box">
          <div className="button-box">
            <button className="login"> Log in </button>
            <button className="register"> Register </button>
            <NavLink to="/" className="skip" onClick={this.props.loggedIn}>
              Skip
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
