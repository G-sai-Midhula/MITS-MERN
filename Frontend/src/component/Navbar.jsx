import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
            <li><Link className="link" to="/home">Home</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/Contact">Contact</Link></li>
            <li><Link className="link" to="/Service">Service</Link></li>
            
            <li><Link className="link" to="/Login">Login</Link></li>
            <li><Link className='link' to="/hook">Hook</Link></li>
            <li><Link className='link' to="/signup">Signup</Link></li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar