import React from 'react';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';

const DrinkList = ({ isLoading, results, favorites, handlePagination }) => {
  const renderDrinks = results.result.map((drink, i) => {
    let isFavorite = false;
    if (favorites.find(fave => fave.drink_id === drink.id)) {
      isFavorite = true;
    }
    return <Link className='anchor' to={`/drink/${drink.id}`} key={i}><DrinkCard drink={drink} id={drink.id} key={i} isFavorite={isFavorite}/></Link>;
  });

  return (
    <div>
      {isLoading &&
        <div className='loading'>
          <p>Loading</p>
          <img src='/assets/img/loading.svg' className='img-loading' alt='loading spinner' />
        </div>
      }
      {!isLoading &&
        <div className='drink-list-container'>
          <p className='results-title'>{results.totalResult} drinks found!</p>
          <div className='results-container'>
            <div className='pagination-container'>
            {results.previous &&
              <button className='btn-page-back' onClick={() => handlePagination(results.previous)}></button>
            }
            </div>
            <div className='search-results-container'>
              {renderDrinks}
            </div>
            <div className='pagination-container'>
            {results.next &&
              <button className='btn-page-forward' onClick={() => handlePagination(results.next)}></button>
            }
            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default DrinkList;
