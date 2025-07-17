import React from 'react'
import { useParams } from 'react-router-dom'

function Detail({products}) {
    const {id}=useParams();
    const product=products.find((item)=>item.id==id);
    console.log(product);
  return (
    <>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <img src={product.image} alt={product.title} />
    
    
    </>
  )
}

export default Detail