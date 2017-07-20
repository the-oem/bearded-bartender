import React, { Component } from 'react';
import { render } from 'react-dom';
import ApiUtils from '../utils/apiUtils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      user: {},
    };
  }

  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
    const apiUtils = new ApiUtils();
    apiUtils.fetchDrinks().then(drinks => this.setState({ drinks }));
    apiUtils.fetchUser('1@1.com', 'password').then(user => this.setState({ user }));
  }

  render() {
    console.log(this.state);
    return (
      <div>Hello World</div>
    );
  }
}
