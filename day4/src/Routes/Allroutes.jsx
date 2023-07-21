import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Singleproduct from "../pages/SingleProduct"
import Payment from "../pages/Payment";
import Privateroutes from "../Routes/Privateroutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={
      <Privateroutes>
     <Products/>
 
      </Privateroutes>
              }
         />

        <Route path="/about" element={<About />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/payment" element={<Payment/>} />
        <Route path="/login" element={<Login />} />
        <Route  path="/products/:id" element={<Singleproduct/>}/>
        <Route  path="/singleproduct/:id" element={<Cart/>}/>
        
       
      </Routes>
    </div>
  );
};

export { AllRoutes };