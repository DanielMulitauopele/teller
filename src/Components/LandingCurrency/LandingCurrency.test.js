import React from 'react'
import LandingCurrency from './LandingCurrency'
import { shallow } from 'enzyme'

describe('LandingCurrency Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LandingCurrency />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})