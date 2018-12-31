import React from 'react'
import { shallow } from 'enzyme'
import Notes from './Notes'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Notes />)
})

describe('Notes Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})