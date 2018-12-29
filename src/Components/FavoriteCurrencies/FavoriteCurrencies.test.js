import React from 'react'
import FavoriteCurrencies from './FavoriteCurrencies'
import { shallow } from 'enzyme'

describe('FavoriteCurrencies Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<FavoriteCurrencies />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})