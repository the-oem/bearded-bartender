import React from 'react';
import { shallow } from 'enzyme';
import DrinkCard from './DrinkCard';

describe('Search Component Testing', () => {
  const favoriteProps = {
    drink: {
      name: 'Vodka Mule',
      rating: 34,
    },
    isFavorite: true,
    id: 'vodka-mule',
  };

  const notFavoriteProps = {
    drink: {
      name: 'Vodka Mule',
      rating: 34,
    },
    isFavorite: false,
    id: 'vodka-mule',
  };

  it('renders correct component when it mounts', () => {
    const wrapper = shallow(<DrinkCard {...favoriteProps}/>);
    expect(wrapper.find('.drink-card-result')).toHaveLength(1);
  });

  it('renders the drink title', () => {
    const wrapper = shallow(<DrinkCard {...favoriteProps}/>);
    expect(wrapper.find('.drink-card-title')).toHaveLength(1);
    expect(wrapper.find('.drink-card-title').text()).toEqual('Vodka Mule');
  });

  it('renders a drink image', () => {
    const wrapper = shallow(<DrinkCard {...favoriteProps}/>);
    expect(wrapper.find('.results-image')).toHaveLength(1);
    const src = wrapper.find('.results-image').prop('src');
    expect(src).toEqual('http://assets.absolutdrinks.com/drinks/transparent-background-white/85x200/vodka-mule.png');
  });

  it('renders a drink rating', () => {
    const wrapper = shallow(<DrinkCard {...favoriteProps}/>);
    expect(wrapper.find('.drink-card-rating')).toHaveLength(1);
    expect(wrapper.find('.drink-card-rating').text()).toEqual('34');
  });

  it('renders an active favorite icon when appropriate', () => {
    const wrapper = shallow(<DrinkCard {...favoriteProps}/>);
    expect(wrapper.find('.icon-favorite')).toHaveLength(1);
    const src = wrapper.find('.icon-favorite').prop('src');
    expect(src).toEqual('/assets/img/favorite-active.svg');
  });

  it('renders an inactive favorite icon when appropriate', () => {
    const wrapper = shallow(<DrinkCard {...notFavoriteProps}/>);
    expect(wrapper.find('.icon-favorite')).toHaveLength(1);
    const src = wrapper.find('.icon-favorite').prop('src');
    expect(src).toEqual('/assets/img/favorite-inactive.svg');
  });
});
