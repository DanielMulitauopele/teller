import React from 'react'
import { shallow } from 'enzyme'
import LandingCurrencyContainer from './LandingCurrencyContainer'
import { mockAbbrevCurrencies } from '../../Utils/Mockdata/mockAbbrevCurrencies'

describe('LandingCurrencyContainer Component', () => {
  let wrapper
  const mockSetFilter = jest.fn()
  const mockAddToFavorites = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<LandingCurrencyContainer
                        abbrevCurrencies={mockAbbrevCurrencies}
                        setFilter={mockSetFilter}
                        addToFavorites={mockAddToFavorites}
                      />)
  })

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state().active).toEqual(false)
  })

  describe('handleClick function', () => {
    it('should call setFilter with the correct params', () => {
      const rankLink = wrapper.find('.rank-link')
      rankLink.simulate('click', {
        target: {name: 'Rank'}
      })
      expect(mockSetFilter).toHaveBeenCalledWith('Rank')
    })
  })
})