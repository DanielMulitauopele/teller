import React from 'react'
import Hotdog from './Hotdog'
import { shallow } from 'enzyme'

describe('Hotdog Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Hotdog />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})