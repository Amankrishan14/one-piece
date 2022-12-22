import React from "react";
import "./App.css";
import Navbar from "./comonent/Navbar";
import Home from "./comonent/Home";
import Checkout from "./comonent/Checkout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/checkout" element={<div className='app'><Checkout/></div>}></Route>
            
         
          <Route path="/" element={<div className='app'>
            
            <Home />
            </div>}></Route>
            
          
        </Routes>
      </div>
  );
}

export default App;
