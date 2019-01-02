import React from 'react'
import { shallow } from 'enzyme'
import NotesContainer from './NotesContainer'
import { mockNotes } from '../../Utils/MockData/mockNotes'

let wrapper
const mockAddToNotes = jest.fn()
const mockRemoveFromNotes = jest.fn()

beforeEach(() => {
  wrapper = shallow(<NotesContainer 
                      notes={mockNotes}
                      addToNotes={mockAddToNotes}
                      removeFromNotes={mockRemoveFromNotes}
                    />)
})

describe('NotesContainer Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})