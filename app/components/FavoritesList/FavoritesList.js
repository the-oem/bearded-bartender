import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';

export default class FavoritesList extends Component {

  render() {
    const renderDrinks = this.props.favorites.map((drink, i) => {
      // const newDrink = Object.assign({}, drink, { id: drink_id });
      return <Link to={`/drink/${drink.drink_id}`} key={i}><DrinkCard drink={drink} id={drink.drink_id} key={i} isFavorite={true}/></Link>;
    });

    console.log('class props', this.props);

    return (
      <div>
        <div className='results-container'>
          <div className='search-results-container'>
            {renderDrinks}
          </div>
        </div>
      </div>
    );
  }

}
