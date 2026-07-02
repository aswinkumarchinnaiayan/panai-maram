import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Heritage from './pages/Heritage'
import Products from './pages/Products'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import AddCart from './components/AddCart'
import Address from './pages/Address'
import Payment from './pages/Payment'
import OrderSuccess from './pages/OrderSuccess'
import ViewOrders from './pages/ViewOrders'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/heritage' element={<Heritage />} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='payment' element={<Payment/>}/>
          <Route path='ordersuccess' element={<OrderSuccess/>}/>
          <Route path='/vieworder' element={<ViewOrders/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
