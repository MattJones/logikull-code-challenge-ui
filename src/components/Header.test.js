import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Component: Header', () => {
  const wrapper = shallow(<Header />);

  it('renders a Toolbar', () => {
    expect(wrapper.find('Toolbar').exists()).toBe(true);
  });
});
