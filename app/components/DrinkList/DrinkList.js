import React from 'react';
import Drink from '../Drink/Drink';

const DrinkList = ({ results, handlePagination }) => {
  const renderDrinks = results.result.map((drink, i) => <Drink drink={drink} key={i}/>);
  return (
    <div>
      {results.previous &&
        <button onClick={() => handlePagination(results.previous)}>Prev</button>
      }
      {renderDrinks}
      {results.next &&
        <button onClick={() => handlePagination(results.next)}>Next</button>
      }
    </div>
  );
};

export default DrinkList;
