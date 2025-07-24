import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../redux/actions';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;