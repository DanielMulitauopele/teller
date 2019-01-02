import React from 'react'
import LandingCurrency from './LandingCurrency'
import { shallow } from 'enzyme'
import { mockAbbrevCurrencies } from '../../Utils/MockData/mockAbbrevCurrencies'
import DataCleaner from '../../Utils/Cleaners'

describe('LandingCurrency Component', () => {
  let wrapper
  let i = 1
  let mockAddToFavorites = jest.fn()
  const mockFormatFavorite = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<LandingCurrency
                        index={i}
                        currency={mockAbbrevCurrencies[1]}
                        addToFavorites={mockAddToFavorites}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().expanded).toEqual(false)
  })

  describe('expand function', () => {
    it('should toggle the expanded property in state', () => {
      wrapper.instance().expand()
      expect(wrapper.state().expanded).toEqual(true)
    })
  })

  describe('handleClick function', () => {
    it('should call formatFavorite with the correct parameter', () => {
      wrapper.instance().cleaner.formatFavorite = jest.fn()
      wrapper.instance().expand()
      const heart = wrapper.find('.fave-this')
      heart.simulate('click', {
        target: {name: "Bitcoin"}
      })
      expect(wrapper.instance().cleaner.formatFavorite).toHaveBeenCalledWith("Bitcoin")
    })

    it('should call addToFavorites', () => {
      wrapper.instance().expand()
      const mockFave = {
        name: "DopeCoin",
        price: 1000000000.00,
        percent_change: 100
      }
      const heart = wrapper.find('.fave-this')
      heart.simulate('click', {
        target: {name: "Bitcoin"}
      })
      wrapper.instance().cleaner.formatFavorite = jest.fn(() => mockFave)
      expect(mockAddToFavorites).toHaveBeenCalled()
    })
  })
})