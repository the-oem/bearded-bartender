import React, { Component } from 'react';
import { object } from 'prop-types';
import ApiUtils from '../../utils/apiUtils';

export default class DrinkDetail extends Component {

  componentDidMount() {
    console.log('props in DrinkDetail', this.props);
    if (this.props.items.result) {
      console.log('we have items');
      const drink = this.props.items.result.find(item => item.id === this.props.match.params.id);
    } else {
      console.log('we have no items to map');
    }
  }

  fetchDrink(id) {
    return fetch();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleCreateAccount(this.state);
  }

  render() {
    return (
      <div>
        Drink Detail
      </div>
    );
  }
}
