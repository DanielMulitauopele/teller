import React, { Component } from "react";
import "./LoginForm.css";
import Play from "../../Assets/play.svg";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    //check password against password stored in db
    //if password doesn't match, display error
    //if password matches, call logInUser
    this.props.logInUser(this.state.email);
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
          <p className="login-button">Go</p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
