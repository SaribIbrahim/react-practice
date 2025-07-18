import React from 'react'
import Card from '../components/Card'
import './Home.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Home() {

  let [productsAPI, setProductsAPI] = useState([]);;
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProductsAPI(data));
  }, []);

  return (
    <>

      <div className="home-wrapper">
        <div className="row">
          {
            productsAPI.map((items) => (
              <Card
                title={items.title}
                price={items.price}
                image={items.image}
                description={items.description}
                id={items.id}
                category={items.category}
              />
            ))
          }

        </div>
      </div>
    </>

  )
}

export default Home