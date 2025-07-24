import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyCoupon } from '../redux/actions';

const CouponInput = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(applyCoupon(code));
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter coupon code"
      />
      <button onClick={handleApply}>Apply Coupon</button>
    </div>
  );
};

export default CouponInput;