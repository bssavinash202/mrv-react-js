import React from 'react';

const CitiesList = ({ cities }) => {
  return (
    <div className='City-Names'>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </div>
  );
};

export default CitiesList;