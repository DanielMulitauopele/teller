import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

describe('App Component', () => {
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    // expect(wrapper.state().favorites).toEqual()
    expect(wrapper.state().abbrevCurrencies).toEqual([])
    expect(wrapper.state().expandedCurrencies).toEqual([])
    expect(wrapper.state().userEmail).toEqual("")
    expect(wrapper.state().news).toEqual([])
  })

  describe('addToFavorites function', () => {
    it('should add a coin to favorites', () => {
    })
  })
})
