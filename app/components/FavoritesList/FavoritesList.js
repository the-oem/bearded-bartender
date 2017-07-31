import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';

export default class FavoritesList extends Component {

  render() {
    const renderDrinks = this.props.favorites.map((drink, i) => {
      return <Link to={`/drink/${drink.drink_id}`} key={i}><DrinkCard drink={drink} id={drink.drink_id} key={i} isFavorite={true}/></Link>;
    });

    return (
      <div className='favorites-container'>
          <p className='favorites-title'>Your favorite dranks!</p>
          <div className='search-results-container'>
            {renderDrinks}
          </div>
      </div>
    );
  }

}
