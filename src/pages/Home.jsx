import React from 'react'
import Card from '../components/Card'

function Home({ products }) {



  return (


    <div className="wrapper">
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


  )
}

export default Home