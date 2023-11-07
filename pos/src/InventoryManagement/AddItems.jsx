import React, { useState } from "react";
import axios from "axios";

const AddItems = (props) => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      // invalid file type
      setImage(null);
    }
  };

  const handleAddItem = () => {
    // validation
    const errors = {};
    if (itemName.trim() === "") {
      errors.itemName = "Item name is required";
    }
    if (category.trim() === "") {
      errors.category = "Category is required";
    }
    if (unitPrice.trim() === "") {
      errors.unitPrice = "Unit price is required";
    }
    if (quantity.trim() === "") {
      errors.quantity = "Quantity is required";
    } else if (isNaN(quantity) || +quantity <= 0) {
      errors.quantity = "Quantity must be a positive number";
    }
    if (!image) {
      errors.image = "Image is required";
    }

    if (Object.keys(errors).length === 0) {
    
      const formData = new FormData();
      formData.append("itemName", itemName);
      formData.append("category", category);
      formData.append("unitPrice", unitPrice);
      formData.append("quantity", quantity);
      formData.append("image", image);

      // POST request 
      axios.post("YOUR_SERVER_ENDPOINT", formData)
        .then((response) => {
         
          console.log(response.data);
        })
        .catch((error) => {
        
          console.error("Error adding item:", error);
        });
    } else {
    
      setValidationErrors(errors);
    }
  };

  const handleClearForm = () => {
 
    setItemName("");
    setCategory("");
    setUnitPrice("");
    setQuantity("");
    setImage(null);
    setValidationErrors({});
  };

  return (
    <React.Fragment>
      {/* <h1>Add Items</h1> */}
      <div className="d-flex justify-content-center w-100">
        <div className="d-flex w-50 bg-light text-dark p-2 justify-content-center align-items-center rounded">
          <div className="w-75 p-2">
            <form className="">
              <h2 className="mb-4 text-center">Add new Item</h2>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${validationErrors.itemName ? 'is-invalid' : ''}`}
                  id="itemName"
                  placeholder="Item name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <label htmlFor="itemName">Item name</label>
                {validationErrors.itemName && <div className="invalid-feedback">{validationErrors.itemName}</div>}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${validationErrors.category ? 'is-invalid' : ''}`}
                  id="category"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="category">Category</label>
                {validationErrors.category && <div className="invalid-feedback">{validationErrors.category}</div>}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className={`form-control ${validationErrors.quantity ? 'is-invalid' : ''}`}
                  id="quantity"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <label htmlFor="quantity">Quantity</label>
                {validationErrors.quantity && <div className="invalid-feedback">{validationErrors.quantity}</div>}
              </div>


              <div className="form-floating mb-3">
                <input
                  type="number"
                  className={`form-control ${validationErrors.unitPrice ? 'is-invalid' : ''}`}
                  id="unitPrice"
                  placeholder="Unit price"
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
                <label htmlFor="unitPrice">Unit price</label>
                {validationErrors.unitPrice && <div className="invalid-feedback">{validationErrors.unitPrice}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Upload the image of the item
                </label>
                <input
                  className={`form-control ${validationErrors.image ? 'is-invalid' : ''}`}
                  type="file"
                  id="formFile"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {validationErrors.image && <div className="invalid-feedback">{validationErrors.image}</div>}
              </div>

              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  onClick={handleAddItem}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleClearForm}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddItems;
