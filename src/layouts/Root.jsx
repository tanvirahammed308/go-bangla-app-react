import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'

const Root = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root