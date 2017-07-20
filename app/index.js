import React, { Component } from 'react';
import { render } from 'react-dom';

class Root extends Component {
  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
    console.log('Im here');
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

render(<Root />, document.getElementById('main'));
