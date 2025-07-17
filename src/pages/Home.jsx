import React from 'react'
import Card from '../components/Card'
import './Home.css'
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
            />
          ))
        }
      </div>
    </div>
    </>

  )
}

export default Home