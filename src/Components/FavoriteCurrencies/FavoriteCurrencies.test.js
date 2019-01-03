import React from 'react'
import FavoriteCurrencies from './FavoriteCurrencies'
import { shallow } from 'enzyme'

describe('FavoriteCurrencies Component', () => {
  let wrapper
  let mockFavorite = {
    name: 'Some Coin',
    price: 0.00000000000,
    percent_change: 1.0000000000
  }
  let mockRemoveFromFavorites = jest.fn()
  let mockAddToFavorites = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<FavoriteCurrencies
                        favorite={mockFavorite}
                        removeFromFavorites={mockRemoveFromFavorites}
                        addToFavorites={mockAddToFavorites}
                      />)
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})