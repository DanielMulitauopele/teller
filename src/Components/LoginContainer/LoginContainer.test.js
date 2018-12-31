import React from 'react'
import { shallow } from 'enzyme'
import LoginContainer from './LoginContainer'

let wrapper

beforeEach(() => {
  wrapper = shallow(<LoginContainer />)
})

describe('LoginContainer Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})