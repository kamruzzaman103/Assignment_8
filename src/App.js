import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
