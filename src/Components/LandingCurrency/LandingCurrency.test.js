import React from 'react'
import LandingCurrency from './LandingCurrency'
import { shallow } from 'enzyme'
import { mockAbbrevCurrencies } from '../../Utils/MockData/mockAbbrevCurrencies'

describe('LandingCurrency Component', () => {
  let wrapper
  let i = 1
  let mockAddToFavorites = jest.fn()

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
})