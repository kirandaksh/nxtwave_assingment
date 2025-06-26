import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;



/*
1. when request is made then server is sending a html, css, js bundler to frontend. 
ui + data 
2. for the first render we get a bundler with (ui + data)
3. spa , no  reloaded should take place  why? as reload means getting both ui + data 
4. thats why react works in a way where res any have data comming from server 
*/