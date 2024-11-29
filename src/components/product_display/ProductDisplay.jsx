import React, { useContext } from 'react'
import './ProductDisplay.css'
import ProductItem from '../ProductItem/ProductItem'
import { StoreContext } from '../../context/StoreContext'

const ProductDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div>
      <div className="product-display" id="product-display">
        <h2>Our Best Products</h2>
        <div className="Product-display-list">
          {food_list.map((item, index) => {
            if (category === 'All' || category === item.category) {
              return (
                <ProductItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.short_description}
                  image={item.image}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
