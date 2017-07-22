import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
// import { object } from 'prop-types';
// import { getFromCache } from '../../helpers/storageUtils';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  submitAuthentication(e) {
    e.preventDefault();
    // this.props.handleAuthentication(this.state);
    // this.setState({
    //   email: '',
    //   password: '',
    // });
  }

  handleClick(e) {
    e.preventDefault();
    // this.props.history.push('/create-account');
  }

  render() {
    // const errorMessage = (!this.props.userIsAuthenticated && this.props.userAuthenticationFailure === 'User not found.') ? 'Authentication Failure' : '';
    return (
      <div className='login'>
        <form className='input-form'>
          <input type='text'
                 value={this.state.email}
                 placeholder='Email'
                 className='email-input'
                 onChange={(e) => { this.setState({ email: e.target.value }); }}/>
          <input type='text'
                 value={this.state.password}
                 placeholder='Password'
                 className='password-input'
                 onChange={(e) => { this.setState({ password: e.target.value }); }}/>
          <button onClick={this.submitAuthentication.bind(this)}>Login</button>
        </form>
        <h3 className='error-msg'>{errorMessage}</h3>
        <p className='create-acct-prompt'>Don't have an account?</p>
        <button onClick={this.handleClick}>Create Account</button>
      </div>
    );
  }
}
