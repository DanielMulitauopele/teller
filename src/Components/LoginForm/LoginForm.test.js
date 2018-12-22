import React from 'react'
import LoginForm from './LoginForm'
import { shallow } from 'enzyme'

describe('LoginForm Component', () => {
  let wrapper
  const logInUser = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<LoginForm logInUser={logInUser}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().password).toEqual('')
  })

  describe('handleSubmit function', () => {

  })

  describe('handleChange function', () => {
    it('should set state with the correct keys and values', () => {
      const emailInput = wrapper.find('.user-email')
      const passwordInput = wrapper.find('.user-password')
      emailInput.simulate('change', {
        target: { name: 'email', value: 'someDude@gmail.com' }
      })
      passwordInput.simulate('change', {
        target: { name: 'password', value: 'yaaaaaaayyyy'}
      })

      expect(wrapper.state().email).toEqual('someDude@gmail.com')
      expect(wrapper.state().password).toEqual('yaaaaaaayyyy')
    })
  })
})