import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    return (
      <div className='login-container'>
        {!this.props.userIsAuthenticated &&
          <div className='login-form-container'>
            <form className='login-form' onSubmit={this.submitAuthentication}>
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
            <p className='error-msg'>{this.props.loginErrorMessage}</p>
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
