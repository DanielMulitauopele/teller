import React, { Component } from 'react'

class RegisterForm extends Component {
  constructor(props) {
    super ('props')
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmedPassword: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //send user info to DB
  }

  render() {
    const { name, email, password, confirmedPassword } = this.state
    return (
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="register-input register-name-input"
          placeholder="Enter Full Name"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name} />
        <input
          className="register-input register-email-input"
          placeholder="Enter Email Address"
          type="email"
          name="email"
          onChange={this.handleChange}
          value={email} />
        <input
          className="register-input register-password-input"
          placeholder="Enter Password"
          type="password"
          name="password"
          onChange={this.handleChange}
          value={password} />
        <input
          className="register-input register-confirm-input"
          placeholder="Confirm Password"
          type="password"
          name="confirmedPassword"
          onChange={this.handleChange}
          value={confirmedPassword} />
      </form>
    )
  }

}

export default RegisterForm