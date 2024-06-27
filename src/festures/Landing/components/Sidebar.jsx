import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <aside className="w-[180px] h-screen bg-slate-400 flex">
        <ul className=" w-full text-lg font-semibold flex flex-col items-center">
            <li className="pt-2"><Link to={'/'}>Home</Link></li>
            <li className="py-2"><Link to={'/hero'}>Images</Link></li>
            <li className=""><Link to={'/invoice'}>Invoice</Link></li>
        </ul>

    </aside>
    </>
  )
}

export default Sidebar