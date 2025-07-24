import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const discount = useSelector(state => state.discount);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total - (total * discount) / 100;

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <p>Total: ${discountedTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
