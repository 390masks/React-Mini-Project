import React, { useState } from 'react';
import city1 from './city1.jpg'
import city2 from './city2.jpg'
import city3 from './city3.jpg'
import './ImageTog.scss';



const ImageTog = () => {
    const images=[
      city1,
      city2,
      city3
    ]
  const [activeImg,setActiveImg]=useState(0);

  function handilNext(){
    setActiveImg((activeImg+1)%images.length);
  }

  function handilPrev(){
    setActiveImg((activeImg-1+images.length)%images.length);
  }


  return (
    <div>
      <div className='img-container'>
        <img src={images[activeImg]} alt='' /> 
      </div>
      <button className='button-Next' onClick={handilNext}>prev</button>
      <button className='button-Prev' onClick={handilPrev}>next</button>
    </div>
  )
}

export default ImageTog