import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
function Card({ title, price, image, description, id, category }) {
  return (
    <div className="col-md-2">
      <Link to={`/product/${id}`}>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p>${price}</p>
            <button className="btn btn-primary">Add to Cart</button>
            <Link to={`/category/${category}`}>
              <button className="btn btn-outline-primary mt-3">View More in {category}</button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
