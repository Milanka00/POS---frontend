import React from 'react';

const SelectedItemsList = ({ cart }) => {
  return (
    <div>
      <h1>Selected Items</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedItemsList;
