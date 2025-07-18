import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'    

function Detail() {
    
    let productsAPI=useLoaderData();
  
    const {id} = useParams();
    const product = productsAPI.find((item) => String(item.id) === id);

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