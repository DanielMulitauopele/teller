import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import { logInUser } from "../../Utils/API";
import { NavLink } from "react-router-dom";

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    // const { toggleLogIn, storeToken, addToFavorites, addToNotes, setCurrencies } = this.props

    this.state = {
      email: "",
      password: "",
      token: "",
      disabled: true
    };
  }

  handleClick = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = JSON.stringify({
      email: email,
      password: password
    });
    const token = await logInUser(user);
    this.props.toggleLogIn(email);
    this.props.storeToken(token);
    this.props.addToNotes();
    this.props.addToFavorites();
    this.props.setCurrencies();
    this.setState({ token: token.teller_api_token });
  };

  handleChange = async e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, token } = this.state;
    if (token !== "" && token !== undefined) {
      return <Redirect to="/home" />;
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
            />
            <hr />
            <input
              className="form-input user-password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <button
              disabled={!(this.state.email && this.state.password)}
              className="login-button"
              onClick={this.handleClick}
            >
              Let's Go!
            </button>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;
