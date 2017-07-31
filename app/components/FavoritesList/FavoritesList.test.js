import React from 'react';
import { shallow } from 'enzyme';
import FavoritesList from './FavoritesList';

describe('Favorites List Component Testing', () => {
  it.skip('should render correct component when it mounts', () => {
    const wrapper = shallow(<FavoritesList {...props}/>);
    expect(wrapper.find('.search-container')).toHaveLength(1);
  });
});
