import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Exploreproducts from '../../components/Exlpore_Products/Exploreproducts'

const Home = () => {
  const [categorgy, setCategory] = useState('All')

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
