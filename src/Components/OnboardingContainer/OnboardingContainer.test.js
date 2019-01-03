import React from 'react'
import { shallow } from 'enzyme'
import Onboarding from './Onboarding'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Onboarding />)
})

describe('Onboarding Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})