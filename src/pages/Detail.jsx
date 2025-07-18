import React from 'react'
import { useLoaderData } from 'react-router-dom'    

function Detail() {
    
    let product=useLoaderData();
  
    

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
        </>
    );
}

export default Detail