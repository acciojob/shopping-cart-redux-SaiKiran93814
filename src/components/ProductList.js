// ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/actions';

const products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 150 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} className="custom-card card">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
            <button className="btn btn-secondary" onClick={() => dispatch(addToWishlist(product))}>
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
