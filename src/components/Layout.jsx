import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav'


function Layout({products}) {
  return (
    <>
    <Nav products={products} />
    <Outlet />
    </>
  )
}

export default Layout