import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import LoginContainer from '../containers/Login/LoginContainer';
import SearchContainer from '../containers/Search/SearchContainer';
import CreateAccountContainer from '../containers/CreateAccount/CreateAccountContainer';

export default class App extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <LoginContainer />
        <Route exact path='/' render={({ match }) => {
          <SearchContainer history={history} location='home' />;
        }}/>

        <Route exact path='/create-account'
                render={props =>
                  (this.props.userIsAuthenticated ?
                  <Redirect to='/' /> :
                  <CreateAccountContainer location='create-account' {...props} />)} />
      </div>
    );
  }
}
