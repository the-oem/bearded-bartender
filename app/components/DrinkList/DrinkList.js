import React from 'react';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';

const DrinkList = ({ results, handlePagination, isLoading }) => {
  const renderDrinks = results.result.map((drink, i) => {
    return <Link to={`/drink/${drink.id}`} key={i}><DrinkCard drink={drink} key={i}/></Link>;
  });

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
