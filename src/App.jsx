import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Home from './pages/Home'

import Products from './pages/Products'
import Cart from './pages/Cart'

import { useState } from 'react'

function App() {
const [cart,setCart]=useState([]);

const addToCart = (product) => {
  setCart((prevCart) => {
    const isItemInCart = prevCart.find((item) => item.id === product.id);

    if (isItemInCart) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};

const removeFromCart =(id) => {
  setCart(prev => prev.filter(item => item.id !== id));
};

const increaseQuantity = (productId) => {
  setCart(cart.map(item => 
    item.id === productId 
      ? { ...item, quantity: (item.quantity || 1) + 1 }
      : item
  ));
};

const decreaseQuantity = (productId) => {
  setCart(cart.map(item => 
    item.id === productId && (item.quantity || 1) > 1
      ? { ...item, quantity: (item.quantity || 1) - 1 } 
      : item
  ));
};

  return (
    <div>

      <BrowserRouter>

      <div className="navy">

        <Link to="/" style={{ textDecoration:'none', color:'white', fontWeight:'bold'}}>Home</Link>
        <Link to="/products" style={{ textDecoration:'none', color:'white', fontWeight:'bold'}} >Products</Link>
        <Link to="/cart"  style={{ textDecoration:'none', color:'white', fontWeight:'bold'}}>Cart({cart.length})</Link>


        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
         
          <Route path='/products' element={<Products  addToCart={addToCart} />}></Route>
          <Route path='/cart' element={<Cart cart={cart} 
          removeFromCart={removeFromCart}  
          increaseQuantity={increaseQuantity} 
           decreaseQuantity={decreaseQuantity}/>}></Route>
           

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
