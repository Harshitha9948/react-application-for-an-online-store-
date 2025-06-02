import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './Home'; 
import Register from './Register'; 
import Login from './Login'; 
import Products from './Products'; 
import './App.css'; 
 
function App() {     return ( 
        <Router> 
            <div className="online-store"> 
                <h2>  Online Store</h2> 
                <nav> 
                    <Link to="/">Home</Link> 
                    <Link to="/register">Register</Link> 
                    <Link to="/login">Login</Link> 
                    <Link to="/products">Products</Link> 
                </nav> 
 
                <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/register" element={<Register />} /> 
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/products" element={<Products />} /> 
                </Routes> 
            </div> 
        </Router> 
    ); 
} 
 
export default App; 
