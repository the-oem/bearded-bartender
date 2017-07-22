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
  }

  componentDidMount() {
    this.setState({ input: '' });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchDrinksSearch(this.state.input);
  }

  render() {
    return (
      <div>
        <Logo />
        <form onSubmit={this.handleSearch}>
          <input type='text' value={this.state.input} placeholder='Search for a drink...' onChange={e => this.setState({ input: e.target.value })}/>
          <button>Search</button>
        </form>
        {this.props.items.result &&
          <div>
            <DrinkList results={this.props.items} />
          </div>
        }
      </div>
    );
  }
}
