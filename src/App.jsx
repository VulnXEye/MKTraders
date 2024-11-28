import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Aboutus from './pages/Aboutus/Aboutus'
import Contactus from './pages/Contactus/Contactus'
import Products from './pages/Products/Products'
import ProductDetail from './components/ProductDetail/ProductDetail'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productCategories" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  )
}

export default App
