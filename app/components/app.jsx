import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginContainer from '../containers/Login/LoginContainer';
import SearchContainer from '../containers/Search/SearchContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      user: {},
    };
  }

  render() {
    return (
      <div>
        <LoginContainer />
        <SearchContainer />
      </div>
    );
  }
}
