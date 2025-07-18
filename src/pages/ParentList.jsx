import React from 'react'
import ProductCard from '../components/ProductCard'
import './ParentList.css'
import { useState, useEffect } from 'react'


function ParentList() {

  let [productsAPI, setProductsAPI] = useState([]);

  let getData=async()=>{
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