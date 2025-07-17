import React from 'react'
import Card from '../components/Card'
import './Home.css'
import { Link } from 'react-router-dom'
function Home({ products }) {



  return (
    <>

      <div className="home-wrapper">
        <div className="row">
          {
            products.map((items) => (
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