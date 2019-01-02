import React from 'react'
import { shallow } from 'enzyme'
import Note from './Note'
import { mockNotes } from '../../Utils/MockData/mockNotes'

let wrapper
const mockAddToNotes = jest.fn()
const mockRemoveFromNotes = jest.fn()

beforeEach(() => {
  wrapper = shallow(<Note 
                      note={mockNotes[0]}
                      addToNotes={mockAddToNotes}
                      removeFromNotes={mockRemoveFromNotes}
                    />)
})

describe('Notes Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().expanded).toEqual(false)
  })
})