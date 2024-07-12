import React, { useState } from 'react';
import Image from './Image';
import './image.css';
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.502xw:1.00xh;0.256xw,0&resize=640:*',
    'https://www.mishry.com/wp-content/uploads/2019/06/packaged-food-brands.png',
    'https://tnpolicecanteen.tn.gov.in/images/Grocery.png',
    'https://img.freepik.com/premium-photo/concept-shopping-website_1059430-45965.jpg?w=740',
    'https://img.paisawapas.com/ovz3vew9pw/2021/10/06223906/amazon-trending.jpg',
    'https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Coop/Shoesupdated/Campus-978x1256_1._SY1050_QL85_.jpg'
];
const captions =[
  'Cosmetics',
  'Snacks',
  'Groceries',
  'Clothing',
  'Electronics',
  'Shoes'
]

const handleNext = () => {
  setCurrentIndex(currentIndex === images.length - 1? 0 : currentIndex + 1);
};

const handlePrev = () => {
  setCurrentIndex(currentIndex === 0? images.length - 1 : currentIndex - 1);
};

  return (
    <div >
      <Image image={images[currentIndex]} />
      <button id='pre' onClick={handlePrev}>&#10094;</button>
      <button id='next' onClick={handleNext}>&#10095;</button>
       <h2>Current Photo - {captions[currentIndex]}</h2>
      
    </div>
  );
};

export default Slider;