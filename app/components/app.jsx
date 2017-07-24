import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginContainer from '../containers/Login/LoginContainer';
import SearchContainer from '../containers/Search/SearchContainer';
import CreateAccountContainer from '../containers/CreateAccount/CreateAccountContainer';
import { getFromCache } from '../utils/storageUtils';

export default class App extends Component {

  componentDidMount() {
    const user = getFromCache('authenticatedUser');
    if (user) {
      this.props.loginFromCache(user);
    }
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <LoginContainer {...this.props}/>
        <Route exact path='/' render={({ match }) => <SearchContainer history={history} location='home' />}/>

        <Route exact path='/create-account'
                render={props =>
                  (this.props.userIsAuthenticated ?
                  <Redirect to='/' /> :
                  <CreateAccountContainer location='create-account' {...props} />)} />
      </div>
    );
  }
}
