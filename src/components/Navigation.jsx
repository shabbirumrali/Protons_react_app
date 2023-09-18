import React from 'react'
import { NavLink, Link } from 'react-router-dom';

// styles
import './component.css'

const Navigation = () => {
  return (
    <nav className='nav flex'>
        <ul className='flex'>
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/about"> About </NavLink></li>
            <li><NavLink to="/contact"> Contact </NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
        </ul>
        <div className='login'>
            <Link to="/login" className='login'>Login</Link>
        </div>
    </nav>
  )
}

export default Navigation