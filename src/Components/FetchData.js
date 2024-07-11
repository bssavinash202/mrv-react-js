
import React, { useState, useEffect } from 'react';
import ProductsList from './productsList';

function FetchData() {
    const [products, setProducts]= useState([]);
    const [originalProducts, setOriginalProducts] = useState('');
    const [searchValue, setSearchValue]=useState('');
    const [ascend, setAscend]=useState(false);
    const [descend, setDescend]=useState(false);
    const [loading, setLoading]= useState(true);
    const [newProducts, setNewProducts]= useState({title:'',category:'',price:0});

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
        const newProductsData = {...newProducts, id: products.length+1};
        setProducts([...products, newProductsData]);
        setNewProducts({title:'',category:'',price:0});
      };
      const handleNewProduct=(e)=>{
        setNewProducts({...newProducts, [e.target.name]:e.target.value});
      };

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
        <button onClick={()=>handleUpdate({id:3,title:'Nivea dark Spot Removal Face wash', category:'Beauty', price:'1.10'})}>Update a Product</button><br></br>
        <button onClick={()=>handleDelete(5)}>Delete a Product</button><br/>
        <form>
          <label>
            Title:
            <input type='text' name='title' value={newProducts.title} onChange={handleNewProduct}></input>
          </label>
          <label>
            category:
            <input type='text' name='category' value={newProducts.category} onChange={handleNewProduct}></input>
          </label>
          <label>
            price:
            <input type='number' name='price' value={newProducts.price} onChange={handleNewProduct}></input>
          </label>
        </form>
        <button onClick={handleAdd}>Add a Product</button><br></br>

        <h1 className='products'> Products </h1>
       
        <ProductsList products={products} searchValue={searchValue} ascend={ascend} descend={descend}></ProductsList>
        
     </div>
        
    );
}

export default FetchData;
