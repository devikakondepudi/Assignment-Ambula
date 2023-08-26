import React, { useState } from 'react';
import CartItem from './carItem';
// import ShoppingCart from './components/ShoppingCart';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItem = () => {
    if (itemName.trim() !== '' && !isNaN(itemPrice)) {
      const newItem = { name: itemName, price: parseFloat(itemPrice) };
      setCartItems([...cartItems, newItem]);
      setItemName('');
      setItemPrice('');
    }
  };

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const totalItems = cartItems.length;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item name"
      />
      <input
        type="text"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        placeholder="Item price"
      />
      <button onClick={addItem}>Add Item</button>
      <p>Total Items: {totalItems}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <div className="cart-list">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            removeItem={() => removeItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
