import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart,increaseQty } from '../features/cart/cartSlice';
function Card({ products }) {



  const { cart } = useSelector(state => state.rootReducer);

  const currentItem = cart.cart.find(item => item.id === products.id);

  const dispatch = useDispatch();

  const handleClick = (prod) => {
    dispatch(addToCart(prod));
  }

  const handleIncrement=(id)=>{
    dispatch(increaseQty(id))
  }

  return (
    <div className="col-md-3">
      <div className="card">
        <img src={products.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/product/${products.id}`}>
            <h5 className="card-title">{products.title}</h5>
            <p className="card-text">{products.description}</p>
            <p>${products.price}</p>
          </Link>
          {
            currentItem
              ? <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px", justifyContent:"center" }}>
               {currentItem.quantity>=10 ? <>
               <button className="btn btn-primary" disabled >+</button>
                <input value={currentItem.quantity} type="text" disabled style={{width:"40px"}}/>
                <button className="btn btn-primary">-</button>
               </> : <>
               <button className="btn btn-primary" onClick={()=>handleIncrement(products.id)}>+</button>
                <input value={currentItem.quantity} type="text" style={{width:"40px"}}/>
                <button className="btn btn-primary">-</button>
               </> }
              </div>
              : <button className="btn btn-primary" onClick={() => handleClick(products)}>Add to Cart</button>
          }
          <Link to={`/category/${products.category}`}>
            <button className="btn btn-outline-primary mt-3">View More in {products.category}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
