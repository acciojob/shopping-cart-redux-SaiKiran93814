// App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import CouponInput from './components/CouponInput';

const App = () => {
  return (
    <div>
      <nav className="navbar-expand-lg">
        <h1 className="text-center">Shopping Cart Redux</h1>
      </nav>
      <ProductList />
      <CouponInput />
      <Cart />
      <Wishlist />
    </div>
  );
};

export default App;
