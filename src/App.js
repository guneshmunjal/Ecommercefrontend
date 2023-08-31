import './App.css';
import React from 'react';


import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Shop } from './pages/Shop/Shop';
import { Cart } from './pages/Cart/Cart';
import { Shopcontext, ShoppingContext } from './Context/Shopcontext';

function App() {
  return (
    <div className="App">
      <Shopcontext>
      hello
<Router>
  <Navbar/>
  <Routes>
    <Route path = "/" element={<Shop/>}/>
    <Route path = "/cart" element = {<Cart/>}/>
  </Routes>
</Router> 
</Shopcontext>
    </div>
  );
}

export default App;
