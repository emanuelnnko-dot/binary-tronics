import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
        <Footer />
    </BrowserRouter>

    // <>
    //   <ProductDetails />
    // </>
  )
}

export default App