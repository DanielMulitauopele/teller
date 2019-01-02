import React from 'react'
import AboutUs from './AboutUs'
import { shallow } from 'enzyme'

describe('AboutUs Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AboutUs />)
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})