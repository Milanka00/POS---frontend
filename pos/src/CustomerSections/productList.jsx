import React, { useState } from 'react';
import ItemCard from './Itemcard';
import SelectedItemsList from './SelectedItems';

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      imageSrc: 'path_to_image1',
      altText: 'Item 1',
      title: 'Item 1 Title',
      description: 'Description for Item 1',
    },
    {
      id: 2,
      imageSrc: 'path_to_image2',
      altText: 'Item 2',
      title: 'Item 2 Title',
      description: 'Description for Item 2',
    },
    
  ];

  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it
      setCart([...cart, item]);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <div className="item-list">
        { products.map((item) => (
          <ItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
        )}
      </div>
      <SelectedItemsList cart={cart} />
    </div>
  );
};

export default ProductList;
