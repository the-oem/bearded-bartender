import React from 'react';
import { shallow } from 'enzyme';
import DrinkList from './DrinkList';

describe('Drink List Component Testing', () => {
  it.skip('should render correct component when it mounts', () => {
    const wrapper = shallow(<DrinkList {...props}/>);
    expect(wrapper.find('.drink-list-container')).toHaveLength(1);
  });
});
