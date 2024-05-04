import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const MenuSection = () => {
  return (
    <div className=" flex flex-1">
      <div className="flex items-center gap-2 p-2 w-[600px] border-solid border-2 border-slate-400 rounded-[20px]">
        <label htmlFor=""><IoSearchSharp className="text-slate-400 text-2xl"/></label>
        <input type="text" placeholder=" Search" className="border-none outline-none ml-1 bg-[#E7EAED]"/>
      </div>
    </div>
  )
}

export default MenuSection