import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Component: Home', () => {
  it('renders the albums container', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('.my-albums-container__header')).toBe(true);
  });
});
