import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Header from './Component/Header/Header';
// import Footer from './Component/Footer/Footer';
import Contact from './Component/pages/Contact/Contact';
import Cart from './Component/pages/Cart/Cart';
import Product from './Component/pages/Product/Product';
import About from './Component/pages/About/About';
import Home from './Component/pages/Home/Home';
import { CartProvider } from './contexts/CartContext';

function App(){
  return(
    <CartProvider>
    <BrowserRouter>
    
    <Header />
    <main>
      <Routes>
        
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Home" element={<Home/>}/>
        

      </Routes>
    </main>
  
    
    </BrowserRouter>
    </CartProvider>
)
  }
  
export default App;

