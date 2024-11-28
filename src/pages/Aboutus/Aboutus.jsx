import React from 'react'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <div className="about-us">
      <h1>About MKTraders</h1>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            Welcome to <strong>MKTraders</strong>, your trusted partner in the
            B2B market for premium-quality painting and allied products. We
            specialize in offering a wide range of tools and products to meet
            all your painting and application needs. Our product portfolio
            includes:
          </p>
          <ul>
            <li>Paint Rollers</li>
            <li>Designer Rollers</li>
            <li>Epoxy Application Tools</li>
            <li>Putty Knives</li>
            <li>PVC Handle Wall Scrapers</li>
            <li>Paint Allied Products</li>
            <li>High-Quality Paint Brushes</li>
          </ul>
          <p>
            At MKTraders, we are committed to delivering top-notch products to
            businesses across industries. Our mission is to empower our clients
            with the tools they need to achieve professional results, ensuring
            both efficiency and excellence in every project.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://via.placeholder.com/400"
            alt="About MKTraders"
            className="about-us-img"
          />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
