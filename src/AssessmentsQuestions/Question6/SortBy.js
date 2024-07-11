import React, { useEffect, useState } from 'react';
import Child from './Child';
import './search.css';
function SortBy() {
    const [products, setProducts]= useState([]);
    const [searchValue, setSearchValue]=useState('');
    const [searchBy, setSearchBy] = useState('title');
    const [sortCriteria, setSortCriteria] = useState('');
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
      const handleSearchByChange = (event) => {
        const searchBy = event.target.value;
        setSearchBy(searchBy);
      };
      const handleSortChange = (event) => {
        const sortCriteria = event.target.value;
        setSortCriteria(sortCriteria);
      };
    return (
        
        <div>
            <select onChange={handleSortChange}>
        <option >Select sorting criteria</option>
        <option value="title">Sort by Title</option>
        <option value="category">Sort by Category</option>
        <option value="ascend">Sort by Lowest to Highest</option>
        <option value="descend">Sort by Highest to Lowest</option>
      </select>
      <select onChange={handleSearchByChange}>
        <option value="title">Search by Title</option>
        <option value="price">Search by Price</option>
        <option value="category">Search by Category</option>
      </select>
            <input
        type="text" value={searchValue} onChange={handleFilter}  placeholder="Search Products" className='searchbar' margin='50%' />
        <Child products={products} searchValue={searchValue} sortCriteria={sortCriteria} searchBy={searchBy}></Child>
        </div>
    );
}

export default SortBy;
