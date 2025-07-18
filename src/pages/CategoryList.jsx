import React from 'react'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'  

function CategoryList() {
  let productsAPI=useLoaderData();

  
  return (
    <>
    <div className="row">
        {
            productsAPI.map((item)=>(
                <Card 
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
                id={item.id}
                category={item.category}
                />
            ))
        }
    </div>
    
    </>
  )
}

export default CategoryList