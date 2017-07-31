import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo Component Testing', () => {
  it('renders a component element', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('.logo-container')).toHaveLength(1);
  });

  it('renders a Link component', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('Link')).toHaveLength(1);
  });

  it('renders an image', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('renders a title', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('.logo-title')).toHaveLength(1);
    expect(wrapper.find('.logo-title').text()).toEqual('Bearded Bartender');
  });
});
