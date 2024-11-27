import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState('home')
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </li>
        <li
          onClick={() => setMenu('aboutus')}
          className={menu === 'aboutus' ? 'active' : ''}
        >
          About Us
        </li>
        <li
          onClick={() => setMenu('products')}
          className={menu === 'products' ? 'active' : ''}
        >
          Products
        </li>
        <li
          onClick={() => setMenu('contactus')}
          className={menu === 'contactus' ? 'active' : ''}
        >
          Contact Us
        </li>
      </ul>
    </div>
  )
}

export default Navbar
