import React from 'react';

const Drink = ({ drink }) => {
  const drinkImage = `http://assets.absolutdrinks.com/drinks/transparent-background-white/75x200/${drink.id}.png`;
  return (
    <div>{drink.name}</div>
  );
};

export default Drink;
