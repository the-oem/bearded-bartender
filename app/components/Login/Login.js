import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { browserHistory } from 'react-router';
// import { object } from 'prop-types';
// import { getFromCache } from '../../helpers/storageUtils';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
      firstName: '',
    };
    this.submitAuthentication = this.submitAuthentication.bind(this);
    this.submitLogout = this.submitLogout.bind(this);
  }

  submitAuthentication(e) {
    e.preventDefault();
    this.props.handleAuthentication(this.state);
    this.resetState();
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
    console.log('login', this.props);
    return (
      <div className='login-container'>
        {!this.props.userIsAuthenticated &&
          <div>
            <form className='input-form' onSubmit={this.submitAuthentication}>
              <input type='text'
                value={this.state.email}
                placeholder='Email'
                className='input-email'
                onChange={(e) => { this.setState({ email: e.target.value }); }}/>
              <input type='text'
                value={this.state.password}
                placeholder='Password'
                className='input-password'
                type='password'
                onChange={(e) => { this.setState({ password: e.target.value }); }}/>
              <button className='btn-login' alt='Login'></button>
            </form>
            <p className='create-acct-prompt'>
              Don't have an account? <Link to='/create-account'>Register.</Link>
            </p>
            <h3 className='error-msg'>{this.props.loginErrorMessage}</h3>
          </div>
        }
        {this.props.userIsAuthenticated &&
          <div className='logout-container'>
            Welcome, {this.props.user.firstName}! <button onClick={this.submitLogout} className='btn-logout' alt='Logout'></button>
          </div>
        }
      </div>
    );
  }
}
