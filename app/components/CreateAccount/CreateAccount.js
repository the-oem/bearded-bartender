import React, { Component } from 'react';
import { object } from 'prop-types';
import ApiUtils from '../../utils/apiUtils';
import Logo from '../Logo/Logo';

export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleCreateAccount(this.state);
  }

  render() {
    return (
      <div className='create-account-container'>
        <Logo />
        <form className='create-account-form' onSubmit={this.handleSubmit}>
              <div className='create-account-title'><img src='../../assets/img/avatar.svg' alt='create account avatar' className='create-account-icon' />Create Account</div>
              <label>First Name
              <input className='create-account-input'
                     type='text'
                     value={this.state.firstName}
                     placeholder='First'
                     onChange={(e) => { this.setState({ firstName: e.target.value }); }}/></label>

              <label>Last Name
              <input className='create-account-input'
                    type='text'
                    value={this.state.lastName}
                    placeholder='Last'
                    onChange={(e) => { this.setState({ lastName: e.target.value }); }}/></label>

              <label>E-mail
              <input className='create-account-input'
                     type='text'
                     value={this.state.email}
                     placeholder='example@email.com'
                     onChange={(e) => { this.setState({ email: e.target.value }); }}/></label>

              <label>password
              <input className='create-account-input'
                     type='password'
                     value={this.state.password}
                     placeholder='Password'
                     onChange={(e) => { this.setState({ password: e.target.value }); }}/></label>

              <span className='error-msg'>{this.props.createAccountErrorMessage}</span>
              <div className='create-account-btn-container'>
                <button className='create-account-back-btn'
                        onClick={() => this.props.history.goBack()}></button>
                <button className='create-account-submit-btn' type='submit'></button>
              </div>
        </form>
      </div>
    );
  }
}
