import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { StoreContext } from '../../context/StoreContext'

const ProductDetail = () => {
  const { id } = useParams()
  const { food_list } = useContext(StoreContext)

  // Find the product based on the ID
  const product = food_list.find((item) => item._id === id)

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div className="product-detail">
      <div className="product-detail-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <h4>{product.short_description}</h4>
        <p>{product.main_description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
