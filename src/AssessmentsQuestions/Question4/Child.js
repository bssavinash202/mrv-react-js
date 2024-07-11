import React from 'react';

function Child({products,  searchValue}) { 
    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    return (
        <div>
           
            {filteredProducts.map((product)=>(
                <ul>
                    {product.id}-{product.title}-{product.category}-{product.price}$
                </ul>
            ))}
        </div>
    );
};

export default Child;
