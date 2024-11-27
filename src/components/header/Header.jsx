import React from 'react'
import './header.css'

const handleNavigation = () => {
  navigate('/productscategory') // Navigate to the desired path
}

const header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h1>M. K. Traders</h1>
          <p>
            "Equipping Professionals with Quality and Confidence" encapsulates
            our commitment to providing top-tier tools and supplies designed
            specifically for industry experts. Every product we offer—whether
            it's paint rollers, hangers, wall brushes, extension poles, or putty
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
    </div>
  )
}

export default header
