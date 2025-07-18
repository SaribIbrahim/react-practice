import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Detail() {
    let [productsAPI, setProductsAPI] = useState([]);
  

    let getData = async()=>{
        try{
           
            const response=await fetch('https://fakestoreapi.com/products');
            const data=await response.json();
            setProductsAPI(data);
            
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
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