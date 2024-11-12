import React from 'react'
import Home from './components/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import Products from './components/Products'
import { BrowserRouter,Route,Routes as Switch } from 'react-router-dom'
import ShowProducts from './components/ShowProducts'
import EditProducts from './components/EditProducts'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/products" element={<Products/>} />
        <Route path= "/showproducts" element={<ShowProducts/>}/>
        <Route path="/editProduct/:id" element={<EditProducts />} />
      </Switch>
      
    </div>
    </BrowserRouter>
  )
}

export default App
