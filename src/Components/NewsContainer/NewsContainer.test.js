import React from 'react'
import { shallow } from 'enzyme'
import NewsContainer from './NewsContainer'

describe('NewsContainer Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NewsContainer />)
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
}) 