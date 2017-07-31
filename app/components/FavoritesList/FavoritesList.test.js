import React from 'react';
import { shallow } from 'enzyme';
import FavoritesList from './FavoritesList';

describe('Favorites List Component Testing', () => {
  const props = {
    favorites: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ],
  };

  it('should render correct component when it mounts', () => {
    const wrapper = shallow(<FavoritesList {...props}/>);
    expect(wrapper.find('.favorites-container')).toHaveLength(1);
  });

  it('should render a title', () => {
    const wrapper = shallow(<FavoritesList {...props}/>);
    expect(wrapper.find('.favorites-title')).toHaveLength(1);
  });

  it('should render a message to add favorites if favorites is empty', () => {
    const emptyProps = Object.assign({}, props, { favorites: [] });
    const wrapper = shallow(<FavoritesList {...emptyProps}/>);

    expect(wrapper.find('Link')).toHaveLength(0);
    expect(wrapper.find('DrinkCard')).toHaveLength(0);
  });

  it('should render a Link and DrinkCard for each favorite found', () => {
    const wrapper = shallow(<FavoritesList {...props}/>);
    expect(wrapper.find('Link')).toHaveLength(3);
    expect(wrapper.find('DrinkCard')).toHaveLength(3);
  });
});
