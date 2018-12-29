import React from 'react'
import RegisterForm from './RegisterForm'
import { shallow, mount } from 'enzyme'

describe('RegisterForm Component', () => {
  let wrapper
  const mockUser = {
    name: 'Steve Jobs',
    id: 1234,
    email: 'steve.jobs@apple.com',
    password: 'apple'
  }

  beforeEach(() => {
    wrapper = shallow(<RegisterForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().name).toEqual('')
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().password).toEqual('')
    expect(wrapper.state().confirmedPassword).toEqual('')
    expect(wrapper.state().passwordError).toEqual(false)
  })

  describe('handleChange function', () => {
    it('should set state with the correct name', () => {
      const nameInput = wrapper.find('.register-name-input')
      nameInput.simulate('change', {
        target: { name: 'name', value: 'Steve Jobs' }
      })
      expect(wrapper.state().name).toEqual('Steve Jobs')
    })

    it('should set state with the correct email', () => {
      const emailInput = wrapper.find('.register-email-input')
      emailInput.simulate('change', {
        target: { name: 'email', value: 'steve.jobs@apple.com' }
      })
      expect(wrapper.state().email).toEqual('steve.jobs@apple.com')
    })

    it('should set state with the correct password', () => {
      const passwordInput = wrapper.find('.register-password-input')
      passwordInput.simulate('change', {
        target: { name: 'password', value: 'mypassword' }
      })
      expect(wrapper.state().password).toEqual('mypassword')
    })

    it('should set state with the correct confirmed password', () => {
      const confirmedInput = wrapper.find('.register-confirm-input')
      confirmedInput.simulate('change', {
        target: { name: 'confirmedPassword', value: 'mypassword' }
      })
      expect(wrapper.state().confirmedPassword).toEqual('mypassword')
    })

    it('should toggle error display if there is no password', () => {
      const passwordInput = wrapper.find('.register-password-input')
      const submitBtn = wrapper.find('.register-button')
      passwordInput.value = ''
      submitBtn.simulate('click')
      expect(wrapper.state().passwordError).toBe(true)
    })

    it('should toggle error display if there is no confirmed password', () => {

    })

    it('should toggle error display if the confirmedPassword and password do not match', () => {
      const passwordInput = wrapper.find('.register-password-input')
      const confirmedInput = wrapper.find('.register-confirm-input')
      const submitBtn = wrapper.find('.register-button')

      passwordInput.value = 'mypassword'
      confirmedInput.value = 'yourpassword'
      submitBtn.simulate('click')
      console.log(wrapper.state())
      expect(wrapper.state().passwordError).toEqual(true)
    })
  })

  describe('handleSubmit function', () => {
    let mockForm

    beforeEach(() => {
      mockForm = wrapper.find('.register-form')
    })

    xit('should submit user info to database', () => {

    })

    xit('should display an error if user information is incomplete', () => {

    })
  })
})