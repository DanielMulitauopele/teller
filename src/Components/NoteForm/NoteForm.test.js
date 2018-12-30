import React from 'react'
import { shallow } from 'enzyme'
import NoteForm from './NoteForm'

describe('NoteForm Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NoteForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})