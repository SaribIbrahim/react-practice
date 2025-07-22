import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
function Card({ products}) {
  const dispatch = useDispatch();
  const handleClick=(prod)=>{
   dispatch(addToCart(prod));
  }
  
  return (
    <div className="col-md-2">

      <div className="card">
        <img src={products.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/product/${products.id}`}>
          <h5 className="card-title">{products.title}</h5>
          <p className="card-text">{products.description}</p>
          <p>${products.price}</p>
          </Link>
        <button className="btn btn-primary" onClick={()=>handleClick(products)}>Add to Cart</button>
        <Link to={`/category/${products.category}`}>
          <button className="btn btn-outline-primary mt-3">View More in {products.category}</button>
        </Link>
      </div>
    </div>
      
    </div >
  );
}

export default Card;
