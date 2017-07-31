import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component Testing', () => {
  const mockFn = jest.fn();
  const loggedOutProps = {
    userIsAuthenticated: false,
  };

  const loggedInProps = {
    userIsAuthenticated: true,
    user: {
      firstName: 'Jason',
    },
    handleLogout: mockFn,
  };

  it('should render correct component when it mounts', () => {
    const wrapper = shallow(<Login {...loggedOutProps}/>);
    expect(wrapper.find('.login-container')).toHaveLength(1);
  });

  it('should render two input fields, a Link, and a button by default', () => {
    const wrapper = shallow(<Login {...loggedOutProps}/>);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('Link')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should have a default state', () => {
    const wrapper = shallow(<Login {...loggedOutProps}/>);
    const loginState = wrapper.state();
    expect(loginState.email).toEqual('');
    expect(loginState.password).toEqual('');
    expect(loginState.firstName).toEqual('');
  });

  it('should let us edit state on change', () => {
    const wrapper = shallow(<Login {...loggedOutProps}/>);
    const result1 = 'suh';
    const result2 = 'dude';
    const emailInput = wrapper.find('.input-email');
    const passwordInput = wrapper.find('.input-password');

    expect(wrapper.state().email).toEqual('');
    expect(wrapper.state().password).toEqual('');
    emailInput.simulate('change', { target: { value: result1 } });
    passwordInput.simulate('change', { target: { value: result2 } });
    expect(wrapper.state().email).toEqual(result1);
    expect(wrapper.state().password).toEqual(result2);
  });

  it.skip('should call a function when the form is submitted', () => {
    const wrapper = shallow(<Login {...loggedOutProps}/>);
    const loginButton = wrapper.find('.btn-login');
    const loginForm = wrapper.find('.login-form');

    loginForm.simulate('submit');
  });

  it('should render a welcome message if you are logged in', () => {
    const wrapper = shallow(<Login {...loggedInProps}/>);
    expect(wrapper.find('.logout-container').text()).toEqual('Welcome, Jason!<Link />');
  });

  it('should render a logout and favorites button once logged in', () => {
    const wrapper = shallow(<Login {...loggedInProps}/>);
    expect(wrapper.find('.btn-logout')).toHaveLength(1);
    expect(wrapper.find('.btn-favorites')).toHaveLength(1);
  });

  it('should allow the logout button to fire a function', () => {
    const wrapper = shallow(<Login {...loggedInProps}/>);
    const logoutBtn = wrapper.find('.btn-logout');
    expect(logoutBtn).toHaveLength(1);
    logoutBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
    logoutBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it.skip('should navigate to /favorites when the favorites button is clicked', () => {

  });
});
