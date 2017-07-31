import React from 'react';
import { shallow, mount } from 'enzyme';
import DrinkDetail from './DrinkDetail';

describe('Drink Detail Component Testing', () => {
  const mockFn = jest.fn();
  const loggedInProps = {
    items: { result: [] },
    match: { params: { id: 'vodka-mule' } },
    favorites: [],
    userIsAuthenticated: true,
    userAuthenticationSuccess: { id: 1 },
    history: { goBack: mockFn },
  };

  const loggedOutProps = Object.assign({}, loggedInProps, { userIsAuthenticated: false });

  const drink = {
    id: 'vodka-mule',
    ingredients: [],
    tastes: [],
    name: 'Vodka Mule',
    descriptionPlain: 'A plain description',
    skill: {
      name: 'easy',
    },
  };

  it('should render correct component when it mounts and is waiting', () => {
    const wrapper = shallow(<DrinkDetail {...loggedInProps}/>);
    expect(wrapper.find('.loading')).toHaveLength(1);
  });

  it('should render a loading image when waiting for data', () => {
    const wrapper = shallow(<DrinkDetail {...loggedInProps}/>);
    expect(wrapper.find('.img-loading')).toHaveLength(1);

    const src = wrapper.find('.img-loading').prop('src');
    expect(src).toEqual('/assets/img/loading.svg');
  });

  it('should have default state', () => {
    const wrapper = shallow(<DrinkDetail {...loggedInProps}/>);
    const state = wrapper.state();

    expect(state.drink).toEqual(null);
    expect(state.imageLoaded).toEqual(false);
    expect(state.cameFromSearch).toEqual(false);
    expect(state.isFavorite).toEqual(false);
  });

  it('should render the drink container element when appropriate', () => {
    const wrapper = shallow(<DrinkDetail {...loggedInProps}/>);
    const state = wrapper.state();

    expect(state.drink).toEqual(null);
    wrapper.setState({ drink });
    expect(wrapper.find('.drink-container')).toHaveLength(1);
  });

  it('should render the drink image', () => {
    const wrapper = shallow(<DrinkDetail {...loggedInProps}/>);
    wrapper.setState({ drink });
    expect(wrapper.find('.drink-detail-image')).toHaveLength(1);

    const src = wrapper.find('.drink-detail-image').prop('src');
    expect(src).toEqual('http://assets.absolutdrinks.com/drinks/solid-background-white/soft-shadow/floor-reflection/300x400/vodka-mule.png');
  });

  it('should render a back button if user came from search', () => {
    const wrapper = shallow(<DrinkDetail {...loggedInProps}/>);
    wrapper.setState({ drink });

    wrapper.setState({ cameFromSearch: false });
    expect(wrapper.find('.btn-back')).toHaveLength(0);

    wrapper.setState({ cameFromSearch: true });
    expect(wrapper.find('.btn-back')).toHaveLength(1);
  });
});
