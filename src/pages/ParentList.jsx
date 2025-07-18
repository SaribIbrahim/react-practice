import React from 'react'
import ProductCard from '../components/ProductCard'
import './ParentList.css'
import { useState, useEffect } from 'react'


function ParentList() {

  let [productsAPI, setProductsAPI] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProductsAPI(data));
  }, []);

  return (

    <div className="wrapper">
      <div className="row">
        {
          productsAPI.map((items)=>
            <ProductCard
            title={items.title}
            price={items.price}
            image={items.image}
            description={items.description}
            />
          )
        }
      </div>
    </div>
  )
}

export default ParentList