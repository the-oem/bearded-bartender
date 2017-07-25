import React, { Component } from 'react';
import DrinkList from '../DrinkList/DrinkList';
import Logo from '../Logo/Logo';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }

  componentDidMount() {
    this.setState({ input: '' });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchDrinksSearch(this.state.input);
  }

  handlePagination(url) {
    this.props.fetchUrl(url);
  }

  render() {
    return (
      <div>
        <Logo />
        <form onSubmit={this.handleSearch}>
          <input type='text' value={this.state.input} placeholder='Search for a drink...' onChange={e => this.setState({ input: e.target.value })}/>
          <button>Search</button>
        </form>
        {this.props.isLoading &&
          <div>
            Loading...
          </div>
        }
        {this.props.items.result &&
          <div>
            <p>{this.props.items.totalResult} drinks found!</p>
            <DrinkList results={this.props.items} handlePagination={this.handlePagination}/>
          </div>
        }
      </div>
    );
  }
}
