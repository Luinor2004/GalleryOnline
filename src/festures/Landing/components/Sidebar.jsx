import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <aside className="w-[200px] h-screen bg-slate-400 flex">
        <ul className="">
            <li className=""><Link to={'/'}>Home</Link></li>
            <li className=""><Link to={'/hero'}>Images</Link></li>
            <li className=""><Link to={'/invoice'}>Invoice</Link></li>
        </ul>

    </aside>
    </>
  )
}

export default Sidebar