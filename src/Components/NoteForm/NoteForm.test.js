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

  it('should start with the correct default state', () => {
    expect(wrapper.state().title).toEqual("")
    expect(wrapper.state().body).toEqual("")
  })

  describe('handleChange function', () => {
    it('should set state with the correct title', () => {
      const titleInput = wrapper.find('.title-input')
      titleInput.simulate('change', {
        target: {name: 'title', value: 'The Office'}
      })
      expect(wrapper.state().title).toEqual('The Office')
    })

    it('should set state with the correct body', () => {
      const bodyInput = wrapper.find('.body-input')
      bodyInput.simulate('change', {
        target: {name: 'body', value: 'Bears. Beets. Battlestar Galactica.'}
      })
      expect(wrapper.state().body).toEqual('Bears. Beets. Battlestar Galactica.')
    })
  })

  describe('handleSubmit function', () => {
    xit('should attach notes to user', () => {

    })
  })
})