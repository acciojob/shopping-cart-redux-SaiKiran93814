import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import CouponInput from './components/CouponInput';

const App = () => {
  return (
    <div>
      <h1>Shopping Cart Redux</h1>
      <ProductList />
      <CouponInput />
      <Cart />
      <Wishlist />
    </div>
  );
};

export default App;