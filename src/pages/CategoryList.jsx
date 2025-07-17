import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

function CategoryList({products}) {
    const {category}=useParams();
    const categoryProducts=products.filter((item)=>item.category==category);
  return (
    <>
    <div className="row">
        {
            categoryProducts.map((item)=>(
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