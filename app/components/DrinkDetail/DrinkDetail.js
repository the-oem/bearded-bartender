import React, { Component } from 'react';
import { object } from 'prop-types';
import ApiUtils from '../../utils/apiUtils';

export default class DrinkDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: null,
      imageLoaded: false,
      cameFromSearch: false,
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentDidMount() {
    let drink;
    if (this.props.items.result) {
      drink = this.props.items.result.find(item => item.id === this.props.match.params.id);
      this.setState({ drink, cameFromSearch: true });
    }
    if (!drink) {
      drink = new ApiUtils().fetchDrinkById(this.props.match.params.id)
        .then(response => response.result[0])
        .then(response => this.setState({ drink: response }))
        .catch(error => console.log(error));
    }
  }

  handleImageLoaded() {
    console.log('image loaded, setting state');
    this.setState({ imageLoaded: true });
  }

  render() {
    if (!this.state.drink) {
      return (
        <div>Loading...</div>
      );
    }
    const drink = this.state.drink;
    const drinkImage = `http://assets.absolutdrinks.com/drinks/transparent-background-white/300x400/${drink.id}.png`;
    const ingredients = drink.ingredients.map((item, i) => <li key={i}>{item.textPlain}</li>);
    const tastes = drink.tastes.map((item, i) => <li key={i}>{item.text}</li>);
    return (
      <div className='drink-container'>
        <div><img src={drinkImage} alt={drink.id} className='drink-detail-image' onLoad={this.handleImageLoaded}/></div>
        <div className='drink-info'>
          <span>
            {/* { TODO only show return to search if we came from search. } */}
            <button onClick={() => this.props.history.goBack()}>Back To Search</button>
            <button>Favorite</button>
          </span>
          <span>{drink.name}</span>
          <span>{drink.descriptionPlain}</span>
          <span>Ingredients: <ul>{ingredients}</ul></span>
          <span>Taste Profile: <ul>{tastes}</ul></span>
          <span>Difficulty: {drink.skill.name}</span>
        </div>
      </div>
    );
  }
}
