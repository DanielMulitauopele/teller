import React, { Component } from 'react'
import { send } from '../../Utils/API'

class RegisterForm extends Component {
  constructor(props) {
    super (props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
      passwordError: false,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password, confirmedPassword } = this.state
    const user = JSON.stringify(
                  {user: 
                    {
                      "email": email,
                      "password": password,
                      "password_confirmation": confirmedPassword
                    }
                  })
    const token = await send(user)
    this.props.storeToken(token)
    if (!password || !confirmedPassword || password !== confirmedPassword) {
      this.togglePasswordError()
    }
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    })
  }

  togglePasswordError = () => {
    const { passwordError } = this.state
    this.setState({ passwordError: !passwordError})
  }

  render() {
    const { name, email, password, confirmedPassword } = this.state
    return (
      <div className="register-box">
        <form className="register-form" onSubmit={this.handleSubmit}>
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
          <button className="register-button">Register</button>
        </form>
      </div>
      )
  }

}

export default RegisterForm
