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
  })

  describe('toggleHotdog function', () => {
    it('should toggle expanded property in state', () => {
      const closedHotdog = wrapper.find('.hotdog-container')
      closedHotdog.simulate('click')
      expect(wrapper.state().expanded).toEqual(true)
    })
  })
})