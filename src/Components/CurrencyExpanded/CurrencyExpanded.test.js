import React from 'react'
import { shallow } from 'enzyme'
import CurrencyExpanded from './CurrencyExpanded'

let wrapper

beforeEach(() => {
  wrapper = shallow(<CurrencyExpanded />)
})

describe('CurrencyExpanded Component', () => {
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})