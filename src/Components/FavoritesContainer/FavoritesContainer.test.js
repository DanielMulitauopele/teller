import React from 'react'
import { shallow } from 'enzyme'
import FavoritesContainer from './FavoritesContainer'
import { mockCurrencies } from '../../Utils/MockData/mockCurrencies'
import { mockAbbrevCurrencies } from '../../Utils/MockData/mockAbbrevCurrencies'

describe('FavoritesContainer Component', () => {
  let wrapper
  let favorites = mockCurrencies.slice(0, 5)
  const mockRemoveFromFavorites = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <FavoritesContainer 
        favorites={favorites}
        removeFromFavorites={mockRemoveFromFavorites}
      />
    )
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})