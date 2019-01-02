import React, { Component } from "react";
import "./LoginContainer.css";
import LoginForm from "../LoginForm/LoginForm";
import { NavLink } from "react-router-dom";

class LoginContainer extends Component {
  constructor({ props, loggedIn }) {
    super(props);
    this.state = {
      expandedLogIn: false,
      expandedRegister: false
    };
  }

  expandLogIn = () => {
    this.setState({
      expandedLogIn: !this.state.expandedLogIn
    });
  };

  expandRegister = () => {
    this.setState({
      expandedRegister: !this.state.expandedRegister
    });
  };

  render() {
    const { expandedLogIn, expandedRegister } = this.state;
    return (
      <div className="login-container">
        <h1 className="app-title"> teller. </h1>
        <p>Your Personal Crypto Analyst</p>
        <div className="form-box">
          <div className={expandedLogIn ? "button-box" : "button-box-expanded"}>
            <button onClick={this.expandLogIn} className="login">
              Log in
            </button>
            <LoginForm />
            <div
              className={
                !expandedRegister ? "register-box-expanded" : "register-box"
              }
            >
              <NavLink to="/onboarding">
                <button className="register">Register</button>
              </NavLink>
            </div>
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
