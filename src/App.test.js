import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import { mockFavorites } from './Utils/MockData/mockFavorites'
import { mockNotes } from './Utils/MockData/mockNotes'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

describe('App Component', () => {
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().favorites.length).toEqual(1)
    expect(wrapper.state().abbrevCurrencies).toEqual([])
    expect(wrapper.state().expandedCurrencies).toEqual([])
    expect(wrapper.state().userEmail).toEqual("")
    expect(wrapper.state().news).toEqual([])
    expect(wrapper.state().notes).toEqual([])
  })

  describe('addToFavorites function', () => {
    it('should add currency to favorites array', () => {
      wrapper.instance().addToFavorites(mockFavorites[0])
      expect(wrapper.state().favorites.length).toEqual(2)
    })

    it('should only allow 5 currencies to be added to favorites', () => {
      const expected = {
        name: "No favorites saved", 
        price: "0",
        percent_change: "0"
      }
      wrapper.instance().addToFavorites(mockFavorites[0])
      wrapper.instance().addToFavorites(mockFavorites[1])
      wrapper.instance().addToFavorites(mockFavorites[2])
      wrapper.instance().addToFavorites(mockFavorites[3])
      wrapper.instance().addToFavorites(mockFavorites[4])
      expect(wrapper.state().favorites).not.toContain(expected)
    })
  })

  describe('removeFromFavorites function', () => {
    it('should remove the favorite with the correct id from state', () => {
      wrapper.instance().addToFavorites(mockFavorites[0])
      expect(wrapper.state().favorites.length).toEqual(2)
      wrapper.instance().removeFromFavorites(wrapper.state().favorites[0].id)
      expect(wrapper.state().favorites.length).toEqual(1)
    })
  })

  describe('addToNotes function', () => {
    it('should add a note to the notes array', () => {
      wrapper.instance().addToNotes(mockNotes[0])
      expect(wrapper.state().notes.length).toEqual(1)
    })
  })

  describe('removeFromNotes function', () => {
    it('should remove the note with the correct id from state', () => {
      wrapper.instance().addToNotes(mockNotes[0])
      expect(wrapper.state().notes.length).toEqual(1)
      wrapper.instance().removeFromNotes(wrapper.state().notes[0].id)
      expect(wrapper.state().notes.length).toEqual(0)
    })
  })

  describe('loginUser function', () => {
    it('should set state with user email', () => {
      const userEmail = "bitcoinfanatic@gmail.com"
      wrapper.instance().logInUser(userEmail)
      expect(wrapper.state().userEmail).toEqual(userEmail)
    })
  })

  describe('displaySearch function', () => {

  })

  describe('setFilter function', () => {

  })
})
