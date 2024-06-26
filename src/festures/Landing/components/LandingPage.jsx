import React from 'react'
 
import NavBar from './Header/NavBar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const LandingPage = () => {
  return (
    <div className="">
      <div className=" w-full fixed">
        <NavBar/>
      </div>


      <div className="flex flex-row pt-[82px]">
        <div className=" h-full fixed">
          <Sidebar/>
        </div>

        <div className=" flex flex-1 ">
          <Outlet/>
        </div>

      </div>
      
    </div>
  )
}

export default LandingPage