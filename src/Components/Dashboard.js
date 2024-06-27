import React, { useState } from 'react';
import CitiesList from './CitiesList';

const cityNames = [
  { id: 1, name: 'Hyderabad' },
  { id: 2, name: 'Chennai' },
  { id: 3, name: 'Bangalore' },
  { id: 4, name: 'Trivendrum' },
  { id: 5, name: 'Bhopal' },
  { id: 6, name: 'Mumbai' },
  { id: 7, name: 'Jaipur' },
  { id: 8, name: 'Kolkata' },
  { id: 9, name: 'Delhi' },
  { id: 10, name: 'Ranchi' },
  { id: 11, name: 'Shimla' },
  { id: 12, name: 'Dehradun' },
  { id: 13, name: 'Lucknow' },
  { id: 14, name: 'Raipur' },
  { id: 15, name: 'Patna' }
];

const Dashboard = () => {
  const [cities, setCities] = useState(cityNames);
  const [searchCity, setSearchCity] = useState('');

  const handleFilter = (event) => {
    const searchCity = event.target.value.toLowerCase();
    setSearchCity(searchCity);
    const filteredCities = cities.filter((city) => {
      return city.name.toLowerCase().includes(searchCity);
    });
    setCities(filteredCities);
  };

  return (
    <div className='Search-Bar'>
      <input
        type="search"
        value={searchCity}
        onChange={handleFilter}
        placeholder="Search Cities"
      />
      <CitiesList cities={cities}/>
    </div>
  );
};

export default Dashboard;