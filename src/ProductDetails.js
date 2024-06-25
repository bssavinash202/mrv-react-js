import React from "react";
const ProductDetails = ({Name, Price, Description, image}) =>{
    return(
<div className="product-details">
    <h1>Name of the Product is : {Name}</h1>
    <h2>Price of the {Name} is : {Price} Lakhs</h2>
    <h2>Here are some key Feature of {Name}:</h2>
    <p>{Description}</p>
    <img src="https://www.iamabiker.com/wp-content/uploads/2020/09/Royal-Enfield-Classic-350-BS6-Stealth-Black-HD-wallpapers-9.jpg" alt="Bullet" height = "400"></img>
</div>
    );
}
export default ProductDetails;