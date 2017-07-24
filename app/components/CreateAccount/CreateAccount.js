import React, { Component } from 'react';
import { object } from 'prop-types';
import ApiUtils from '../../utils/apiUtils';

export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleCreateAccount(this.state);
  }

  render() {
    return (
      <div className='create-account-container'>
        <form className='input-form'>
          <input className='first-name-input'
                 type='text'
                 value={this.state.firstName}
                 placeholder='First'
                 onChange={(e) => { this.setState({ firstName: e.target.value }); }}/>
          <input className='last-name-input'
                type='text'
                value={this.state.lastName}
                placeholder='Last'
                onChange={(e) => { this.setState({ lastName: e.target.value }); }}/>
          <input className='email-input'
                 type='text'
                 value={this.state.email}
                 placeholder='Email'
                 onChange={(e) => { this.setState({ email: e.target.value }); }}/>
          <input className='password-input'
                 type='text'
                 value={this.state.password}
                 placeholder='Password'
                 onChange={(e) => { this.setState({ password: e.target.value }); }}/>
          <button className='create-account-submit-btn'
                  onClick={this.handleClick.bind(this)}>Create Account</button>
        </form>
        <h3 className='error-msg'>{this.props.createAccountErrorMessage}</h3>
      </div>
    );
  }
}
