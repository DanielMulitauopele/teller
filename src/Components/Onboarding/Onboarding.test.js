import React from 'react'
import { shallow } from 'enzyme'
import Onboarding from './Onboarding'

describe('Onboarding Component', () => {
  let wrapper = shallow(<Onboarding />)

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})