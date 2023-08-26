import React from 'react';

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
};

export default CartItem;
