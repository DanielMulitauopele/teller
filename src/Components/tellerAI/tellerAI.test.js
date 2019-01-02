import React from 'react'
import { shallow } from 'enzyme'
import TellerAI from './tellerAI'

describe('TellerAI Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TellerAI />)
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})