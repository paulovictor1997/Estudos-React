import React from 'react'
import {FaCartPlus} from "react-icons/fa"
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <h1 className='logo'>
      <Link to="/">
        Store
      </Link>
      </h1>
      <nav className='link'>
         <Link to="/cart" className='linkBtn'><FaCartPlus/></Link>
      </nav>
    </header>
    
  )
}

export default Header

