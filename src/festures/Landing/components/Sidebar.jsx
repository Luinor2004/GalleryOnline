import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <aside>
        <ul className="">
            <li className=""><Link to={'/'}>Home</Link></li>
            <li className=""><Link to={'/hero'}>Images</Link></li>
        </ul>

    </aside>
    </>
  )
}

export default Sidebar