import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Home from './pages/Home'

import Products from './pages/Products'
import Cart from './pages/Cart'



import Upload from './admin/Upload'
import Update from './admin/Update'
import Edit from './admin/Edit'
import Form from './Form'
import About from './pages/About'
import Footer from './components/Footer'

function App() {



  return (
    <div>

      <BrowserRouter>

        <div className="navy">

          <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>About</Link>
          <Link to="/products" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >Products</Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Cart</Link>



        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/admin' element={<Footer/>}></Route>

          <Route path='/update' element={<Update />}></Route>
          <Route path='/upload' element={<Upload />}></Route>
          <Route path='/edit/:id' element={<Edit />} loader={({ params }) =>
            fetch(`http://localhost:5018/allproduct/${id}`)}></Route>
          <Route path='form' element={<Form />}></Route>


        </Routes>


        {/* Footer */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-4">
                <h4 className="text-2xl font-serif font-bold">Sole & Soul</h4>
                <p className="text-gray-400 text-sm">Elevating your every step since 2026.</p>
              </div>
              <div>
                <h5 className="font-bold mb-4">Shop</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer"><Link to="/products" style={{ textDecoration: 'none',color:'#99a1b0' }} > 
            View All Products
          </Link></li>
                  <li className="hover:text-white cursor-pointer">New Arrivals</li>
                  <li className="hover:text-white cursor-pointer">Best Sellers</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Support</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer">FAQ</li>
                  <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
                  <li className="hover:text-white cursor-pointer">Contact Us</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Newsletter</h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900 border-none rounded-md px-4 py-6 text-sm w-full focus:ring-1 focus:ring-white"
                  />
                  <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                    Subscribe
                  </button>
                </div>
                <div><Link to="/admin" style={{ textDecoration: 'none', color: '#99a1b0'}}>Admin</Link></div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
              &copy; 2026 Sole & Soul. All rights reserved.
            </div>
          </div>
        </footer>

      </BrowserRouter>


    </div>
  )
}

export default App
