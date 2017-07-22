import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    console.log('search term in component', this.state.input);
    this.props.fetchDrinksSearch(this.state.input);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type='text' value={this.state.input} placeholder='Search for a drink...' onChange={e => this.setState({ input: e.target.value })}/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
