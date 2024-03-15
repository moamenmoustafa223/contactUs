import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import NavHeader from '../NavHeader/NavHeader'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <>
    <NavHeader/>
      <NavBar />
     

        <Outlet />
<Footer/>
    </>
  )
}

export default Layout
