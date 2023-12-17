import React from 'react'
import '../../css/App.css'
import Header from './Header'
import Footer from './Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../homePage/Home';
import About from '../aboutPage/About';
import Store from '../storePage/Store';
import Contact from '../contactPage/Contact';
import ProductDetail from '../storePage/ProductDetail';
import ProductState from '../../context/products/ProductState';
import UserState from '../../context/Users/UserState';
import UserProfile from '../UserProfile/UserProfile';
function App() {

  return (
    <>
      <ProductState>
      <UserState>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/store' element={<Store />} />
            <Route exact path='/contact' element={<Contact />} />
            {/* id in path is so that we can use that id to fetch that particular product */}
            <Route exact path='/store/product/:id' element={<ProductDetail />} />
            <Route exact path='/profile' element={<UserProfile />} />
          </Routes>
          <Footer />
        </Router>
      </UserState>
      </ProductState>
    </>
  )
}

export default App
