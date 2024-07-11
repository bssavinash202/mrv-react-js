import React, { useEffect, useState } from 'react'
import './fetch.css'
const DataFetching=()=> {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(Response=>(Response.json()))
        .then(data=>{
            
            setProducts(data.products);
            
        })
    },[]);
    return (
        <body>
        <div id='products'>
            <h1>Products List</h1>
          {products.map((user)=>(
            <ul id='list'>
            {user.id} -{user.title}-{user.category}-{user.price}$
            </ul>   
            ))}
        </div>
        </body>
    );
};

export default DataFetching;
