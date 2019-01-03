import React, { Component } from "react";
import "./LoginForm.css";
import { logInUser } from '../../Utils/API'

export class LoginForm extends Component {
  constructor({ props, toggleLogIn, storeToken }) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state
    const user = JSON.stringify({
      "email": email,
      "password": password
    })

    //check password against password stored in db
    //if password doesn't match, display error
    //if password matches, call logInUser
    const token = logInUser(user)
    this.props.toggleLogIn(email);
    this.props.storeToken(token)
  };

  handleChange = async e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-wrapper">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            className="form-input user-email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            className="form-input user-password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <p className="login-button" onSubmit={this.handleSubmit}>
            Go
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
