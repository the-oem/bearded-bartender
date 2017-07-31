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
    console.log('isLoading in search', this.props.isLoading);
    return (
      <div className='search-container'>
        <form onSubmit={this.handleSearch}>
          <input type='text'
            value={this.state.input}
            className='search-bar'
            placeholder='Search for a drink...'
            onChange={e => this.setState({ input: e.target.value })}/>
          <button className='btn-search'>Search</button>
        </form>

        {!this.props.items.result &&
          <div className='coming-soon'>
            Coming Soon!
              <li>Filter by taste profile</li>
              <li>Filter by occasion</li>
              <li>Search by ingredient</li>
              <li>Browse How-To videos to level up your drink making skills</li>
              <li>Add your own recipes</li>
          </div>
        }

        {this.props.items.result &&
          <DrinkList
            isLoading={this.props.isLoading}
            results={this.props.items}
            favorites={this.props.favorites}
            handlePagination={this.handlePagination}/>
        }
      </div>
    );
  }
}
