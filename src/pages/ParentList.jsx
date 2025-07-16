import React from 'react'
import ProductCard from '../components/ProductCard'
import './ParentList.css'


function ParentList({products}) {

  return (
    <div className="wrapper">
      <div className="row">
        {
          products.map((items)=>
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