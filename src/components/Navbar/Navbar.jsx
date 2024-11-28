import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom' // Import useNavigate from react-router-dom

const Navbar = () => {
  const [menu, setMenu] = useState('home')
  const navigate = useNavigate() // Initialize the navigate hook

  const handleNavigation = (path, menuItem) => {
    setMenu(menuItem) // Set the active menu
    navigate(path) // Navigate to the given path
  }

  return (
    <div className="navbar">
      <img className="LOGO" src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => handleNavigation('/', 'home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </li>
        <li
          onClick={() => handleNavigation('/aboutus', 'aboutus')}
          className={menu === 'aboutus' ? 'active' : ''}
        >
          About Us
        </li>
        <li
          onClick={() => handleNavigation('/productCategories', 'products')}
          className={menu === 'products' ? 'active' : ''}
        >
          Products
        </li>
        <li
          onClick={() => handleNavigation('/contactus', 'contactus')}
          className={menu === 'contactus' ? 'active' : ''}
        >
          Contact Us
        </li>
      </ul>
    </div>
  )
}

export default Navbar
