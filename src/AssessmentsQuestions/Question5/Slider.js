import React, { useState } from 'react';
import Image from './Image';
import './image.css';
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMI4iubVegIz58KEXfmoSjMQKgPCf7Gzgygg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQthiRTLvRpJX1MjdmIQok39Cc4ts9WW7g7Q&s',
    'https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_1280.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD-x0wzOxWfy3ouna67X8o7XKzb_jwwpSlA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX4_7QD1oUs_p1enw5EY-fmr5B4Dh__DG6g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWE1sWo6cVH-k05FgrDOiHk1ZQyLjtuJ4ow&s'
];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div >
      <Image image={images[currentIndex]} />
      <button id='pre' onClick={handlePrev}>&#10094;</button>
      <button id='next' onClick={handleNext}>&#10095;</button>
      <h3>Current Index: {currentIndex+1}</h3>
      
    </div>
  );
};

export default Slider;