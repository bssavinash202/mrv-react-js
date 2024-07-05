import React from 'react';

const CitiesList = ({ cities, searchCity }) => {
  return (
    <div className='City-Names'>
      {cities.map((city) => (
        <ul  key={city.id}>{city.id}: {city.name} is the capital of: <b>{city.capital}</b> have the Population of: <b>{city.population}</b> </ul>
      ))}
    </div>
  );
};

export default CitiesList;