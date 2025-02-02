import React from 'react';

const CartSummary = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default CartSummary;
