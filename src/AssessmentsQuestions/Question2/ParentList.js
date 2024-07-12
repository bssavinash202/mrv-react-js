import React from 'react';
import Child from './Child';
import './index.css';
const list = [
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
const ParentList=()=> {
   
    
    
    return (
        <div>
            <Child list={list}></Child>
        </div>
    )
}

export default ParentList;
