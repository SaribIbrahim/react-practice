import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Detail() {
    let [productsAPI, setProductsAPI] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductsAPI(data));
    }, []);
    
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