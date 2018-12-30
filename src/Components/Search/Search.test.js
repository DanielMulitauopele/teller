import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'

describe('Search Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().active).toEqual(false)
    expect(wrapper.state().hasText).toEqual(false)
    expect(wrapper.state().search).toEqual('')
  })

  describe('toggleSearchBtn function', () => {
    it('should toggle the active property in state', () => {
      const searchBtn = wrapper.find('.search-image')
      searchBtn.simulate('click')
      expect(wrapper.state().active).toEqual(true)
    })
  })

  describe('handleChange function', () => {
    it('should set state with the correct value', () => {
      const searchInput = wrapper.find('.search-bar')
      searchInput.simulate('change', {
        target: { name: 'search', value: 'bitcoin'}
      })
      expect(wrapper.state().search).toEqual('bitcoin')
    })
  })
})