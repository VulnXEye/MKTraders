import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/productCategories')
  }

  return (
    <div className="header">
      <div className="header-contents">
        <h1>M. K. Traders</h1>
        <p>
          "Equipping Professionals with Quality and Confidence" encapsulates our
          commitment to providing top-tier tools and supplies designed
          specifically for industry experts. Every product we offer—whether it's
          paint rollers, hangers, wall brushes, extension poles, or putty
          knives—is meticulously crafted to meet professional standards,
          ensuring durability, precision, and efficiency.
        </p>
        <button className="products" onClick={handleNavigation}>
          Explore Products
        </button>
      </div>
      <div className="header_images">
        <img src="/banner.png" alt="banner" />
      </div>
    </div>
  )
}

export default Header
