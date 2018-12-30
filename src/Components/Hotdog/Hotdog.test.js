import React from 'react'
import Hotdog from './Hotdog'
import { shallow } from 'enzyme'

describe('Hotdog Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Hotdog />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().expanded).toEqual(false)
    expect(wrapper.state().activeMenu).toEqual("Home")
  })

  describe('toggleHotdog function', () => {
    it('should toggle expanded property in state', () => {
      const closedHotdog = wrapper.find('.hotdog-container')
      closedHotdog.simulate('click')
      expect(wrapper.state().expanded).toEqual(true)
    })
  })

  describe('changeActiveRoute function', () => {
    it('should set state with the correct value for activeMenu', () => {
      const homeRoute = wrapper.find('.home-li')
      homeRoute.simulate('click', {
        target: { innerText: 'Home' }
      })
      expect(wrapper.state().activeMenu).toEqual('Home')
    })
  })
})