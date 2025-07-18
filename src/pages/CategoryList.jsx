import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'  

function CategoryList() {
  let productsAPI=useLoaderData();

    const {category}=useParams();
    const categoryProducts=productsAPI.filter((item)=>item.category==category);
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