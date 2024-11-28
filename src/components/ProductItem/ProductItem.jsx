import React from 'react'
import './ProductItem.css'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ id, name, description, image }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${id}`)
  }

  return (
    <div>
      <div onClick={handleClick} className="Product_Item">
        <div className="product-item-img-container">
          <img src={image} alt="product.png" className="product-item-image" />
        </div>
        <div className="product-item-info">
          <div className="product-item-name-rating">
            <p>{name}</p>
          </div>
          <p className="product-item-desc">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
