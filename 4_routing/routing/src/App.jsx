import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import User from './pages/User'
import Cart from './pages/Cart'
import PaginationProvider from './contexts/PaginationContext';

function App() {
  return (
    <PaginationProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
      </Routes>
    </PaginationProvider>

  )
}

export default App



/*
1. when request is made then server is sending a html, css, js bundler to frontend. 
ui + data 
2. for the first render we get a bundler with (ui + data)
3. spa , no  reloaded should take place  why? as reload means getting both ui + data 
4. thats why react works in a way where res any have data comming from server 
*/