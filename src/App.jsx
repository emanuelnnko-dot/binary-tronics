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
import Logout from './pages/Logout'
import Unauthorized from './pages/Unauthorized'
import Checkout from './pages/Checkout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'

function App() {

  return (
    <BrowserRouter>
        <Header />
      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/unauthorized' element={<Unauthorized />} />

        {/* Protected Route - Allowed for logged in users */}
        <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Protected Route - Allowed ONLY for Admins */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

      </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App