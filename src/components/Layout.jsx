import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav'
import { useState, useEffect } from 'react'

function Layout() {

  let [productsAPI, setProductsAPI] = useState([]);

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
    <Outlet />
    </>
  )
}

export default Layout