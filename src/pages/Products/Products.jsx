import React from 'react'
import './Products.css'
import { useState } from 'react'
import Exploreproducts from '../../components/Exlpore_Products/Exploreproducts'
import ProductDisplay from '../../components/product_display/ProductDisplay'

const Products = () => {
  const [categorgy, setCategory] = useState('All')
  return (
    <div>
      <Exploreproducts category={categorgy} setCategory={setCategory} />
      <ProductDisplay category={categorgy} />
    </div>
  )
}

export default Products
