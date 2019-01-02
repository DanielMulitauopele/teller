import React from 'react'
import { shallow } from 'enzyme'
import NewsCard from './NewsCard'

describe('NewsCard Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NewsCard />)
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})