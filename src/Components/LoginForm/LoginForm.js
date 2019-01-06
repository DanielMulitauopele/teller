import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import { logInUser } from '../../Utils/API'

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    // const { toggleLogIn, storeToken, addToFavorites, addToNotes, setCurrencies } = this.props

    this.state = {
      email: "",
      password: "",
      token: ""
    };
  }

  handleClick = async e => {
    e.preventDefault();
    const { email, password } = this.state
    const user = JSON.stringify({
      "email": email,
      "password": password
    })
    const token = await logInUser(user)
    this.props.toggleLogIn(email);
    this.props.storeToken(token)
    this.props.addToNotes()
    this.props.addToFavorites()
    this.props.setCurrencies()
    this.setState({ token: token.teller_api_token })
    console.log(this.state.token)
  };

  handleChange = async e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, token } = this.state;
    if (token !== "" && token !== undefined){
      return <Redirect to="/home" />
    } else {
      return (
        <div className="form-wrapper">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              className="form-input user-email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
              // pattern="[a-zA-Z0-9!@#$%^*_|]{6,25}"
            />
            <input
              className="form-input user-password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
              // pattern="[a-zA-Z0-9!@#$%^*_|]{6,25}"
            />
            <p className="login-button" onClick={this.handleClick}>
                Go
            </p>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;
