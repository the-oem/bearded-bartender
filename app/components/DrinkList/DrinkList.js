import React from 'react';
import Drink from '../Drink/Drink';

const DrinkList = ({ results, handlePagination, isLoading }) => {
  const renderDrinks = results.result.map((drink, i) => <Drink drink={drink} key={i}/>);
  return (
    <div>
      <p>{results.totalResult} drinks found!</p>
      <div className='results-container'>
        {results.previous &&
          <button onClick={() => handlePagination(results.previous)}>Prev</button>
        }
        <div className='search-results-container'>
          {renderDrinks}
        </div>
        {results.next &&
          <button onClick={() => handlePagination(results.next)}>Next</button>
        }
      </div>
    </div>
  );
};

export default DrinkList;
