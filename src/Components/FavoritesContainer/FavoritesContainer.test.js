import React from 'react'
import { shallow } from 'enzyme'
import FavoritesContainer from './FavoritesContainer'
import { mockCurrencies } from '../../Utils/MockData/mockCurrencies'

describe('FavoritesContainer Component', () => {
  let wrapper
  let favorites = mockCurrencies.slice(0, 5)

  beforeEach(() => {
    wrapper = shallow(<FavoritesContainer favorites={favorites}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})