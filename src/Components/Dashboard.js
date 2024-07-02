import React, { useState } from 'react';
import CitiesList from './CitiesList';

const cityNames = [
  { id: 1, name: 'Hyderabad', capital: 'TELANGANA',population:3597816 },
  { id: 2, name: 'Chennai', capital: 'TAMIL NADU',population:4328063},
  { id: 3, name: 'Bangalore', capital: 'KARNATAKA',population:5104047 },
  { id: 4, name: 'Thiruvananthapuram', capital: 'KERALA',population:957730 },
  { id: 5, name: 'Bhopal', capital: 'MADHYA PRADESH' ,population:1798218},
  { id: 6, name: 'Mumbai', capital: 'MAHARASTRA' ,population:12691836},
  { id: 7, name: 'Jaipur', capital: 'RAJASTHAN',population:2711758 },
  { id: 8, name: 'Kolkata', capital: 'WEST BENGAL' ,population:4631392},
  { id: 9, name: 'Delhi' , capital: 'DELHI',population:10927986 },
  { id: 10, name: 'Ranchi', capital: 'JHARKHAND' ,population:846454},
  { id: 11, name: 'Shimla', capital: 'HIMACHAL PRADESH' ,population:634261},
  { id: 12, name: 'Dehradun', capital: 'UTTARKHAND' ,population:522081},
  { id: 13, name: 'Lucknow', capital: 'UTTAR PRADESH',population:2472011 },
  { id: 14, name: 'Raipur', capital: 'CHATTISGHARD',population:1010433 },
  { id: 15, name: 'Patna', capital: 'BIHAR',population:1684222 }
];

const Dashboard = () => {
  const [cities, setCities] = useState(cityNames);
  const [searchCity, setSearchCity] = useState('');
  const [ascend, setAscend] = useState(false);
  const [descend, setDescend] = useState(false);

  const handleFilter = (event) => {
    const searchCity = event.target.value.toLowerCase();
    setSearchCity(searchCity);
    const filteredCities = cityNames.filter((city) => {
      return city.name.toLowerCase().includes(searchCity);
    });
    setCities(filteredCities);
  };
  const ascending =()=>{
    const sortedCities =[...cities].sort((a,b)=>b.population-a.population);
    setCities(sortedCities);
    setAscend(true);
  }
  const descending =()=>{
    const sortedCities1=[...cities].sort((a,b)=>a.population-b.population);
    setCities(sortedCities1)
    setDescend(true);
  }
  const handleReset = () => {
    setCities(cityNames);
    setAscend(false);
    setDescend(false);
   
  };
  
  return (
    <div className='dashboard'>
      <input
        type="text" value={searchCity} onChange={handleFilter}  placeholder="Search Cities" className='searchbar' />
        <br></br>
        <button onClick={ascending} className='asc'>Highest to Lowest</button><br></br>
        <button onClick={descending} className='des'>Lowest to Highest</button><br></br>
        <button onClick={handleReset} className='reset'>reset</button>
        <h3> City Names </h3>
      <CitiesList cities={cities} searchCity={searchCity} ascend={ascend} descend={descend}></CitiesList>
     
    </div>
  );
};

export default Dashboard;