import React from 'react'
import LogoSection from './LogoSection'
import MenuSection from './MenuSection'
import AuthSection from './AuthSection'

const NavBar = () => {
  return (
    <div className=" bg-slate-200 flex
     flex-col gap-3 pt-2">
        <div className="flex justify-between px-4 pt-4 items-center">
          <LogoSection/>
          <MenuSection/>
          <AuthSection/>
        </div>
        <hr className="w-full h-[1px] bg-slate-400 "/>
    </div>
  )
}

export default NavBar