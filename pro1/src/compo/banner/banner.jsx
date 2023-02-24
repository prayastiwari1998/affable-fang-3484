import React from 'react';
import "./banner.css"
function ImageContainer({ imageUrl }) {
  return (
    <div className='Img_one'>
      <img src={imageUrl} alt="Product" />
    </div>
  );
}

export default ImageContainer;
