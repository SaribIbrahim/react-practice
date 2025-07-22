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
                    products={item}
                />
            ))
        }
    </div>
    
    </>
  )
}

export default CategoryList