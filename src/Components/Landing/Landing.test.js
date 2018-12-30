import React from 'react'
import { shallow } from 'enzyme'
import Landing from './Landing'
import { mockCurrencies } from '../../Utils/MockData/mockCurrencies'
import { mockAbbrevCurrencies } from '../../Utils/MockData/mockAbbrevCurrencies'

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
                        abbrevCurrencies={mockAbbrevCurrencies}
                     />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})