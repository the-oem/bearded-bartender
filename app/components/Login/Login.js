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
    this.submitAuthentication = this.submitAuthentication.bind(this);
    this.submitLogout = this.submitLogout.bind(this);
  }

  submitAuthentication(e) {
    e.preventDefault();
    this.props.handleAuthentication(this.state);
    this.resetState();
  }

  handleClick(e) {
    e.preventDefault();
    // this.props.history.push('/create-account');
  }

  submitLogout() {
    this.props.handleLogout();
    this.resetState();
  }

  resetState() {
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className='authentication'>
        {!this.props.userIsAuthenticated &&
          <div>
            <form className='input-form' onSubmit={this.submitAuthentication}>
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
              <button className='btn-login'>Login</button>
            </form>
            <h3 className='error-msg'>{this.props.errorMessage}</h3>
            <p className='create-acct-prompt'>Don't have an account?</p>
            <button onClick={this.handleClick}>Create Account</button>
          </div>
        }
        {this.props.userIsAuthenticated &&
          <div className='logout-container'>
            <button onClick={this.submitLogout} className='btn-logout'>Logout</button>
          </div>
        }
      </div>
    );
  }
}
