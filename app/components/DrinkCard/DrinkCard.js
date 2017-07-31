import React from 'react';

const DrinkCard = ({ drink, isFavorite, id }) => {
  const drinkImage = `http://assets.absolutdrinks.com/drinks/transparent-background-white/85x200/${id}.png`;
  return (
    <div className='drink-card-result'>
      <p className='drink-card-title'>{drink.name}</p>
      <div className='drink-card-info'>
        <div className='results-image-container'>
          <img src={drinkImage} alt={id} className='results-image' onLoad={() => console.log('loaded', id)}/>
        </div>
        <div className='drink-card-details'>
          <p>Rating</p>
          <div className='drink-card-rating'>{drink.rating}</div>
          {isFavorite &&
            <img src='/assets/img/favorite-active.svg' className='icon-favorite' />
          }
          {!isFavorite &&
            <img src='/assets/img/favorite-inactive.svg' className='icon-favorite' />
          }
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
