import React from 'react';
import Drink from '../Drink/Drink';

const DrinkList = (drinks) => {
  console.log('drinks to display', drinks);
  const renderDrinks = drinks.results.result.map(drink => <Drink drink={drink} />);
  return (
    <div>
      {drinks.results.previous &&
        <button>Prev</button>
      }
      {renderDrinks}
      {drinks.results.next &&
        <button>Next</button>
      }
    </div>
  );
};

export default DrinkList;
