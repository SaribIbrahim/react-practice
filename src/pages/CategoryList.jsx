import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

function CategoryList() {
  let [productsAPI, setProductsAPI] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProductsAPI(data));
  }, []);

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