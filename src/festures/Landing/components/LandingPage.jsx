import React from 'react'
 
import NavBar from './Header/NavBar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const LandingPage = () => {
  return (
    <div className="">
      <NavBar/>
      <Sidebar/>
      <Outlet/>
      
    </div>
  )
}

export default LandingPage