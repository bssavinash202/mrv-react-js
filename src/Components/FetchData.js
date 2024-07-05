
import React, { useState, useEffect } from 'react';
import ProductsList from './productsList';

function FetchData() {
    const [products, setProducts]= useState([]);
    const [originalProducts, setOriginalProducts] = useState('');
    const [searchValue, setSearchValue]=useState('');
    const [ascend, setAscend]=useState(false);
    const [descend, setDescend]=useState(false);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(Response=>(Response.json()))
        .then(data=>{
            setOriginalProducts(data.products);
            setProducts(data.products);
            setLoading(false);
        })
    },[]);

    const handleFilter = (event) => {
        const searchValue =event.target.value;
        setSearchValue(searchValue);
      };

      const ascending =()=>{
        const sortedProducts =[...products].sort((a,b)=>b.price-a.price);
        setProducts(sortedProducts);
        setAscend(true);
      }

      const descending =()=>{
        const sortedProducts1=[...products].sort((a,b)=>a.price-b.price);
        setProducts(sortedProducts1);
        setDescend(true);
      }

      const handleReset = () => {
        setProducts(originalProducts);
        setSearchValue('');
      };  

      const handleAdd=(newProducts)=>{
        setProducts([...products, newProducts]);
      }

      const handleDelete=(productId)=>{
        const index = products.findIndex(product=>product.id===productId);
        if(index!==-1){
            products.splice(index,1)
            setProducts([...products]);
        }
      }

      const handleUpdate=(updatedProduct)=>{
        const index = products.findIndex(product=>product.id===updatedProduct.id);
        if(index!==-1){
            products[index]=updatedProduct;
            setProducts([...products]);
        }
      }

      if(loading){
        return<div className='loading'><h2>Loading please Wait....!</h2></div>
      }

    
    return (
       
        <div className='Fetchdata'>
      <input
        type="text" value={searchValue} onChange={handleFilter}  placeholder="Search Products" className='searchbar' margin='50%' />
        <br></br>
        <button onClick={ascending} className='asc'>Highest to Lowest</button><br></br>
        <button onClick={descending} className='des'>Lowest to Highest</button><br></br>
        <button onClick={handleReset} className='reset'>reset</button><br></br>
        <button onClick={()=>handleAdd({id:31,title:'Cinthol Cool Soap', category:'Beauty', price:'1.00'})}>handleAdd</button><br></br>
        <button onClick={()=>handleUpdate({id:3,title:'Nivea dark Spot Removal Face wash', category:'Beauty', price:'1.10'})}>handleUpdate</button><br></br>
        <button onClick={()=>handleDelete(5)}>handle handleDelete</button><br/>
        <h1 className='products'> Products </h1>
       
        <ProductsList products={products} searchValue={searchValue} ascend={ascend} descend={descend}></ProductsList>
        
     </div>
        
    );
}

export default FetchData;
