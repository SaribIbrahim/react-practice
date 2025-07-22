import React from 'react'
import Card from '../components/Card'
import './Home.css'
import { useLoaderData} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Home() {
  let productsAPI=useLoaderData();

  const {depAmount}=useSelector((state)=>state.rootReducer);


 

  return (
    <>
      <h1 className='text-center'>${depAmount.value}</h1>
      <div className="home-wrapper">
        <div className="row">
          {
           productsAPI.map((items) => (
              <Card
                products={items}
              />
            ))
          }

        </div>
      </div>
    </>

  )
}

export default Home

