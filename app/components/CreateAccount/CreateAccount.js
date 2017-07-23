import React, { Component } from 'react';
import { object } from 'prop-types';
import ApiUtils from '../../utils/apiUtils';

export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      message: '',
      status: '',
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleCreateAccount(this.state);
  }

  render() {
    console.log('create account props', this.props);
    const errorMessage = this.state.message === 'Internal Server Error' ? 'Email has already been used' : '';
    return (
      <div className='create-account-container'>
        <form className='input-form'>
          <input className='name-input'
                 type='text'
                 value={this.state.name}
                 placeholder='Name'
                 onChange={(e) => { this.setState({ name: e.target.value }); }}/>
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
        <h3 className='error-msg'>{errorMessage}</h3>
      </div>
    );
  }
}
