import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Layout() {

  let [productsAPI, setProductsAPI] = useState([]);
  const {cart}=useSelector((state)=>state.rootReducer);
  const totalPrice = cart.cart.reduce((sum, item) => sum + item.price, 0);

  let getData= async()=>{
    try{
      const response=await fetch('https://fakestoreapi.com/products');
      const data=await response.json();
      setProductsAPI(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Nav products={productsAPI} />
   <div className="row">
     <div className="col-9">
      <Outlet />
     </div>
     <div className="col-3">
      <div className='Price'>
       <h2>Total Price</h2>
       <h3>${totalPrice.toFixed(2)}</h3>
     </div>
     </div>
   </div>
    </>
  )
}

export default Layout