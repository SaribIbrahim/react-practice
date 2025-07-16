import React from 'react'
import './ProductCard.css'
import {useState} from 'react';

function ProductCard({title,price,image,description}) {

    let [isExpensive,setIsExpensive]=useState(false);


     const handleClick = () => {
    if (price >= 100) {
      setIsExpensive(true);
    }
  };
    
  return (
    <div className="col-md-2">
      <div className={`card product-card ${isExpensive ? 'expensive' : ''}`}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>${price}</p>
          <a href="#" className="btn btn-primary" onClick={handleClick}>Highlight If Expensive</a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard