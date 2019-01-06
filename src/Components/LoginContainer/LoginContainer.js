import React, { Component } from "react";
import "./LoginContainer.css";
import LoginForm from "../LoginForm/LoginForm";
import { NavLink } from "react-router-dom";
import infoIcon from "../../Assets/information.svg";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    const { loggedIn, toggleLogIn, storeToken } = this.props

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
    const { toggleLogIn, storeToken, loggedIn } = this.props
    return (
      <div className="login-container">
        <NavLink to="/onboarding">
          <img src={infoIcon} className="info-button" alt="" />
        </NavLink>

        <h1 className="app-title"> teller. </h1>
        <p>
          Your Personal <br />
          CryptoCurrency Analyst
        </p>
        <div className="form-box">
          <div className={expandedLogIn ? "button-box" : "button-box-expanded"}>
            <button onClick={this.expandLogIn} className="login">
              Log in
            </button>
            <LoginForm
              toggleLogIn={toggleLogIn}
              storeToken={storeToken}
              loggedIn={loggedIn}
            />
            <div>
              <NavLink to="/register">
                <button className="register">Register</button>
              </NavLink>
            </div>
            <NavLink to="/home" className="skip" onClick={loggedIn}>
              Skip
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
