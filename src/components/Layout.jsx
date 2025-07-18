import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav'
import { useState, useEffect } from 'react'

function Layout() {

  let [productsAPI, setProductsAPI] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProductsAPI(data));
  }, []);

  return (
    <>
    <Nav products={productsAPI} />
    <Outlet />
    </>
  )
}

export default Layout