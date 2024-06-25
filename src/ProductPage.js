import React from "react";
import ProductDetails from "./ProductDetails";
const ProductPage = () =>{
    const Name = " Royal Enfield Classic 350 Stealth Black BSVI";
    const Price = 2.25;
    const Description = "The attractive mixture of traditional charm and modern flair found in the Royal Enfield Classic 350 Dark Stealth Black is unmistakable. Thanks to its matte black finish, blacked-out components, and understated chrome accents, it has a unique and fashionable appearance that is certain to catch people's attention.";
    return(
        <div className="product-page">
            <h1>Details of the Product</h1>
           <ProductDetails Name = {Name}
            Price = {Price}
            Description = {Description}
            ></ProductDetails>
        </div>
    );
}
export default ProductPage;