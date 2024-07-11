import React, { useEffect, useState } from 'react';
import Child from './Child';
import './search.css';
function ParentFetch() {
    const [products, setProducts]= useState([]);
    const [searchValue, setSearchValue]=useState('');
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(Response=>(Response.json()))
        .then(data=>{
            setProducts(data.products);
        })
    },[]);
    const handleFilter = (event) => {
        const searchValue =event.target.value;
        setSearchValue(searchValue);
      };
      
    
    return (
        <div>
            <input
        type="text" value={searchValue} onChange={handleFilter}  placeholder="Search Products" className='searchbar' margin='50%' />
        <Child products={products} searchValue={searchValue}></Child>
        </div>
    );
}

export default ParentFetch;
