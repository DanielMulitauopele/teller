import React from 'react'
import { shallow } from 'enzyme'
import TweetContainer from './TweetContainer'

let wrapper

beforeEach(() => {
  wrapper = shallow(<TweetContainer />)
})

describe('TweetContainer Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})