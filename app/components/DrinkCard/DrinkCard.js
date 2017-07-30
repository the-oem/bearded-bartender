import React from 'react';

const DrinkCard = ({ drink, isFavorite, id }) => {
  const drinkImage = `http://assets.absolutdrinks.com/drinks/transparent-background-white/75x200/${id}.png`;
  return (
    <div className='drink-result'>
      <p>{drink.name}</p>
      {isFavorite &&
        <p>***</p>
      }
      <img src={drinkImage} alt={id} className='results-image'/>
    </div>
  );
};

export default DrinkCard;
