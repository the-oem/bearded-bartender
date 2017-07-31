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
      isFavorite: false,
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    let drink;
    if (this.props.items.result) {
      drink = this.props.items.result.find(item => item.id === this.props.match.params.id);
      this.setState({
        drink,
        cameFromSearch: true,
        isFavorite: this.setFavoriteStatus(drink),
      });
    }
    if (!drink) {
      drink = new ApiUtils().fetchDrinkById(this.props.match.params.id)
        .then(response => response.result[0])
        .then(response => this.setState({
          drink: response,
          isFavorite: this.setFavoriteStatus(response),
        }))
        .catch(error => console.log(error));
    }
  }

  setFavoriteStatus(drink) {
    if (this.props.favorites.find(fave => fave.drink_id === drink.id)) {
      return true;
    }
    return false;
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
  }

  handleFavorite() {
    if (this.props.userIsAuthenticated) {
      if (this.state.isFavorite) {
        this.props.removeFavorite(this.props.userAuthenticationSuccess.id, this.state.drink.id);
        this.setState({ isFavorite: false });
      } else {
        this.props.setFavorite(
          this.props.userAuthenticationSuccess.id, this.state.drink);
        this.setState({ isFavorite: true });
      }
    }
  }

  render() {
    if (!this.state.drink) {
      return (
        <div className='loading'>
          <p>Loading</p>
          <img src='/assets/img/loading.svg' className='img-loading' alt='loading spinner' />
        </div>
      );
    }
    const faveBtnClass = this.state.isFavorite ? 'btn-active-favorite' : 'btn-inactive-favorite';
    const drink = this.state.drink;
    const drinkImage = `http://assets.absolutdrinks.com/drinks/solid-background-white/soft-shadow/floor-reflection/300x400/${drink.id}.png`;

    const ingredients = drink.ingredients.map((item, i) => <li key={i}>{item.textPlain}</li>);
    const tastes = drink.tastes.map((item, i) => <li key={i}>{item.text}</li>);
    return (
      <div className='drink-container'>
        <div><img src={drinkImage} alt={drink.id} className='drink-detail-image' onLoad={this.handleImageLoaded}/></div>
        <div className='drink-info'>
          <span className='detail-btn-container'>
            {this.state.cameFromSearch &&
              <button onClick={() => this.props.history.goBack()} className='btn-back'></button>
            }
            <button className={faveBtnClass} onClick={this.handleFavorite}></button>
          </span>
          <span className='detail-drink-name'>{drink.name}</span>
          <span>{drink.descriptionPlain}</span>
          <span>Ingredients: <ul>{ingredients}</ul></span>
          <span>Taste Profile: <ul>{tastes}</ul></span>
          <span>Difficulty: {drink.skill.name}</span>
        </div>
      </div>
    );
  }
}
