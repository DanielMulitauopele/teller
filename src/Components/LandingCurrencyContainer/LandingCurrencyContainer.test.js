import React from 'react'
import { shallow } from 'enzyme'
import LandingCurrencyContainer from './LandingCurrencyContainer'
import { mockAbbrevCurrencies } from '../../Utils/Mockdata/mockAbbrevCurrencies'

describe('LandingCurrencyContainer Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LandingCurrencyContainer
                        abbrevCurrencies={mockAbbrevCurrencies}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})