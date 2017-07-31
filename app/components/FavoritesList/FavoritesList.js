import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';

export default class FavoritesList extends Component {

  render() {
    const renderDrinks = this.props.favorites.map((drink, i) => {
      return <Link to={`/drink/${drink.drink_id}`} key={i}><DrinkCard drink={drink} id={drink.drink_id} key={i} isFavorite={true}/></Link>;
    });

    console.log('class props', this.props);

    return (
      <div className='search-container'>
        <div className='results-container'>
          <div className='search-results-container'>
            {renderDrinks}
          </div>
        </div>
      </div>
    );
  }

}
