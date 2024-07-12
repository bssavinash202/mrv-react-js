import React from 'react';

function Child({products,  searchValue, sortCriteria, searchBy}) { 
        let filteredProducts= products;
        if (searchBy === 'title') {
            filteredProducts = products.filter((product) => {
              return product.title.toLowerCase().includes(searchValue.toLowerCase());
            });
          } else if (searchBy === 'price') {
            filteredProducts = products.filter((product) => {
              return product.price.toString().includes(searchValue);
            });
          } else if (searchBy === 'category') {
            filteredProducts = products.filter((product) => {
              return product.category.toLowerCase().includes(searchValue.toLowerCase());
            });
          }
          
      let sortedProducts = filteredProducts;

    if (sortCriteria === 'title') {
     sortedProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
     } else if (sortCriteria === 'category') {
     sortedProducts = filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortCriteria === 'ascend') {
     sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
     }else if (sortCriteria === 'descend') {
        sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);}
    return (
        <div>
            
            {sortedProducts.map((product)=>(
                <ul>
                    {product.id}-{product.title}-{product.category}-{product.price}$
                </ul>
            ))}
        </div>
    );
};

export default Child;
