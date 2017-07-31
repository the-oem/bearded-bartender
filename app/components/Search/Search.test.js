import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search Component Testing', () => {
  let props = {
    items: {
      result: [],
    },
  };

  it('renders correct component when it mounts', () => {
    const wrapper = shallow(<Search {...props}/>);
    expect(wrapper.find('.search-container')).toHaveLength(1);
  });

  it('renders a search bar', () => {
    const wrapper = shallow(<Search {...props}/>);
    expect(wrapper.find('.search-bar')).toHaveLength(1);
  });

  it('should have a default state', () => {
    const wrapper = shallow(<Search {...props}/>);
    const searchState = wrapper.state();
    expect(searchState.input).toEqual('');
    expect(searchState.randomQuote).toEqual(null);
  });

  it('should let us edit state on change', () => {
    const wrapper = shallow(<Search {...props}/>);
    const result = 'suh';
    const searchState = wrapper.state();
    const searchInput = wrapper.find('.search-bar');

    expect(searchState.input).toEqual('');

    searchInput.simulate('change', { target: { value: result } });

    expect(wrapper.state().input).toEqual(result);
  });

  it('should render a DrinkList (and no Coming Soon) if it has results', () => {
    const wrapper = shallow(<Search {...props} />);
    expect(wrapper.find('DrinkList')).toHaveLength(1);
    expect(wrapper.find('.coming-soon')).toHaveLength(0);
  });

  it('should render Coming Soon by default', () => {
    props = {
      items: {},
    };
    const wrapper = shallow(<Search {...props} />);
    wrapper.setState({ randomQuote: {} });
    expect(wrapper.find('.coming-soon')).toHaveLength(1);
  });
});
