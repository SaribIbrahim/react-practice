import React from 'react'
import ProductCard from '../components/ProductCard'
import './ParentList.css'
import { useLoaderData } from 'react-router-dom'


function ParentList() {

  let productsAPI=useLoaderData();

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