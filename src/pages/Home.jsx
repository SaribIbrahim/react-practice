import React from 'react'
import Card from '../components/Card'
import './Home.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Home() {

  let [productsAPI, setProductsAPI] = useState([]);
  let [loading, setLoading] = useState(true);
  
  let getData=async()=>{
    try{
      setLoading(true);
      const response=await fetch('https://fakestoreapi.com/products');
      const data=await response.json();
      setProductsAPI(data);
      setLoading(false);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      <div className="home-wrapper">
        <div className="row">
          {
           loading?<h2>Loading..</h2> :productsAPI.map((items) => (
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