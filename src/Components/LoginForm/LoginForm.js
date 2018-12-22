import React, { Component } from 'react'

export class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.logInUser(this.state.email)
  }

  handleChange = async (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="form-wrapper">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            className="form-input user-email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter Email Address"
          />
          <input
            className="form-input user-password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter Password"
          />
          <button className="login-button">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
