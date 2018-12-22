import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import LoginForm from './LoginForm'
import { shallow } from 'enzyme'

describe('LoginForm Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LoginForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
