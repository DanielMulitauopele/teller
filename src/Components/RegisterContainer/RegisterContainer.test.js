import React from 'react'
import { shallow } from 'enzyme'
import RegisterContainer from './RegisterContainer'

let wrapper

beforeEach(() => {
  wrapper = shallow(<RegisterContainer />)
})

describe('RegisterContainer Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})