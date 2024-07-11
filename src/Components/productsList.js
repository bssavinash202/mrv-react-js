import React from 'react'

function ProductsList({products, searchValue}) {
    const filteredProducts = products.filter((product) => {
        return product.category.toLowerCase().includes(searchValue.toLowerCase());
      });
    return (
       
       <div>
        <table className='table'border={1}>
        <tr>
                 <th><span>ID</span></th>
                 <th><span>title</span></th>
                 <th><span>category</span></th>
                 <th><span>price</span></th>
        </tr> 
         {filteredProducts.map((product)=><tr>
            <td className='id'><span>{product.id}</span></td>
            <td className='title'><span>{product.title}</span></td>
            <td className='category'><span>{product.category}</span></td>
            <td className='price'><span>{product.price}</span>$</td>
    </tr>)}
    </table>
       </div>
    );
}

export default ProductsList;
