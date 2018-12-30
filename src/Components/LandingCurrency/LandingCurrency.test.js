import React from 'react'
import LandingCurrency from './LandingCurrency'
import { shallow } from 'enzyme'
import { mockAbbrevCurrencies } from '../../Utils/MockData/mockAbbrevCurrencies'

describe('LandingCurrency Component', () => {
  let wrapper
  let i = 1

  beforeEach(() => {
    wrapper = shallow(<LandingCurrency
                        index={i}
                        currency={mockAbbrevCurrencies[1]}
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
      const currencyCard = wrapper.find('.currency-card')
      currencyCard.simulate('click')
      expect(wrapper.state().expanded).toEqual(true)
    })
  })
})