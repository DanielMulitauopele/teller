import React, { Component } from "react";
import { registerUser } from "../../Utils/API";
import "./RegisterForm.css";
import { NavLink, Redirect } from "react-router-dom";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    const { storeToken } = this.props

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      passwordError: false,
      token: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmedPassword } = this.state;
    const user = JSON.stringify({
      user: {
        email: email,
        password: password,
        password_confirmation: confirmedPassword
      }
    });
    const token = await registerUser(user);
    this.checkPassword();
    this.props.storeToken(token);
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      token: token.teller_api_token
    });
  };

  checkPassword = () => {
    const { password, confirmedPassword } = this.state;
    if (!password || !confirmedPassword || password !== confirmedPassword) {
      this.togglePasswordError();
    }
  };

  togglePasswordError = () => {
    const { passwordError } = this.state;
    this.setState({ passwordError: !passwordError });
  };

  render() {
    const { name, email, password, confirmedPassword, token } = this.state;

    if (token !== "" && typeof token !== "object") {
      return <Redirect to="/home" />
    }
    return (
      <div className="register-box">
        <div className="register-header">
          <h1> Register </h1>
        </div>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <input
            className="register-input register-name-input"
            placeholder="Enter Full Name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <input
            className="register-input register-email-input"
            placeholder="Enter Email Address"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            className="register-input register-password-input"
            placeholder="Enter Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <p className="pls-password">(At least 10 characters please)</p>
          <input
            className="register-input register-confirm-input"
            placeholder="Confirm Password"
            type="password"
            name="confirmedPassword"
            onChange={this.handleChange}
            value={confirmedPassword}
          />
          <button className="register-button">Register</button>
          <NavLink to="/" className="go-back-button">
            <p>Go Back</p>
          </NavLink>
        </form>
        <div className="bottom-register-box">
          <p>
            (An account is not necessary to use the majority of functionality
            our app provides.)
          </p>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
