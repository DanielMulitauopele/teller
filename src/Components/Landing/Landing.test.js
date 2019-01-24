import React from 'react'
import { shallow } from 'enzyme'
import Landing from './Landing'
import { mockCurrencies } from '../../Utils/MockData/mockCurrencies'
import { mockcurrencies } from '../../Utils/MockData/mockcurrencies'

describe('Landing Component', () => {
  let wrapper
  let favorites = mockCurrencies.slice(0, 5)
  let mockAddToFavorites = jest.fn()
  let mockRemoveFromFavorites = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Landing
                        favorites={favorites}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                        currencies={mockcurrencies}
                     />)
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().active).toEqual(false)
    expect(wrapper.state().news).toEqual([])
  })

  describe('toggleActive function', () => {
    it('should toggle the active property in state', () => {
      wrapper.instance().toggleActive()
      expect(wrapper.state().active).toEqual(true)
    })
  })
})