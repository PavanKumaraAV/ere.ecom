import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './componets/Header';
import ProductList from './componets/ProductList';
import Cart from './componets/Cart';
import AdminLogin from './componets/AdminLogin';
import UserLogin from './componets/UserLogin';
import UserRegister from './componets/UserRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHome from './componets/AdminHome';
import OrderManagement from './componets/OrderManagement';
import AdminProducts from './componets/AdminProducts';

function App() {


  return (

    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/user-register' element={<UserRegister />} />
          <Route path='/' element={<UserLogin />} />
          <Route path='/admin-home' element={<AdminHome/>}/>
          <Route path='/orders' element={<OrderManagement/>}/>
          <Route path='/products-add' element={<AdminProducts/>}/>
          <Route path='/all-products' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
          {/* <Route path='/*' element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;


