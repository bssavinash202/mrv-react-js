import React from 'react';

const CitiesList = ({ cities, searchCity }) => {
  return (
    <div className='City-Names'>
      {cities.map((city) => (
        <ul  key={city.id}>{city.id}: {city.name} is the capital of: {city.capital} have the Population of: {city.population}</ul>
      ))}
    </div>
  );
};

export default CitiesList;