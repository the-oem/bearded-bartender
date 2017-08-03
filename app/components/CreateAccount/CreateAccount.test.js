import React from 'react';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';

describe('Create Account Component Testing', () => {
  let wrapper;
  let handleCreateAccountFn;

  beforeEach(() => {
    handleCreateAccountFn = jest.fn();
    const props = {
      handleCreateAccount: handleCreateAccountFn,
    };
    wrapper = shallow(<CreateAccount {...props}/>);
  });

  it('should render correct component when it mounts', () => {
    expect(wrapper.find('.create-account-container')).toHaveLength(1);
  });

  it('should have a default state', () => {
    const state = wrapper.state();
    expect(state.firstName).toEqual('');
    expect(state.lastName).toEqual('');
    expect(state.email).toEqual('');
    expect(state.password).toEqual('');
  });

  it('should render the Logo component', () => {
    expect(wrapper.find('Logo')).toHaveLength(1);
  });

  it('should render 4 input fields', () => {
    expect(wrapper.find('input')).toHaveLength(4);
  });

  it('should render 2 buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('should update state on input change', () => {
    const initialState = wrapper.state();
    const firstName = 'suh';
    const lastName = 'dude';
    const email = 'me@thebar.com';
    const password = '12345';
    const fNameInput = wrapper.find('#accountFirstName');
    const lNameInput = wrapper.find('#accountLastName');
    const emailInput = wrapper.find('#accountEmail');
    const passwordInput = wrapper.find('#accountPassword');

    expect(initialState.firstName).toEqual('');
    expect(initialState.lastName).toEqual('');
    expect(initialState.email).toEqual('');
    expect(initialState.password).toEqual('');

    fNameInput.simulate('change', { target: { value: firstName } });
    lNameInput.simulate('change', { target: { value: lastName } });
    emailInput.simulate('change', { target: { value: email } });
    passwordInput.simulate('change', { target: { value: password } });

    const newState = wrapper.state();

    expect(newState.firstName).toEqual('suh');
    expect(newState.lastName).toEqual('dude');
    expect(newState.email).toEqual('me@thebar.com');
    expect(newState.password).toEqual('12345');
  });

  it('should invoke a function when the form is submitted', () => {
    const createAcctForm = wrapper.find('.create-account-form');
    createAcctForm.simulate('submit', { preventDefault: () => {} });
    expect(handleCreateAccountFn).toHaveBeenCalledTimes(1);
  });
});
