import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import AboutUs from './AboutUs'
import { shallow } from 'enzyme'

describe('AboutUs Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AboutUs />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})