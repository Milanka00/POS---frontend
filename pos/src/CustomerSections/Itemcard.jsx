import React, { useState } from 'react';

const ItemCard = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    onAddToCart({ ...item, quantity });
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={item.imageSrc} className="card-img-top" alt={item.altText} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#modal${item.id}`}
        >
          Add to Cart
        </button>
      </div>

      {/* Modal */}
      <div className="modal fade" id={`modal${item.id}`} tabIndex="-1" aria-labelledby={`modalLabel${item.id}`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modalLabel${item.id}`}>Add to Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor={`quantityInput${item.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantityInput${item.id}`}
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
