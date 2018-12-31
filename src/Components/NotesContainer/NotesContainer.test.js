import React from 'react'
import { shallow } from 'enzyme'
import NotesContainer from './NotesContainer'

let wrapper

beforeEach(() => {
  wrapper = shallow(<NotesContainer />)
})

describe('NotesContainer Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})