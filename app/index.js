import React, { Component } from 'react';
import { render } from 'react-dom';
// import

class Root extends Component {
  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
    // const data =
    console.log('Im here');
    // const data = return fetch()
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

render(<Root />, document.getElementById('main'));
