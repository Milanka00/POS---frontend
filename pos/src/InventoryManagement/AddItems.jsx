import React, { useState, useEffect } from "react";
import axios from "axios";

const AddItems = (props) => {

  return (
    <React.Fragment>
      <h1>Add Items</h1>
      <div className=" d-flex justify-content-center w-100">
        <div className="d-flex w-50  bg-light text-dark p-2" >
          <h2 className="p-1 mb-2">Add new Item</h2>
          <form>

          <div class="form-floating mb-3">
            <input type="name" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Item name</label>
          </div>

          <div class="form-floating mb-3">
            <input type="cate" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Category</label>
          </div>
          
          <div class="form-floating mb-3">
            <input type="pricee" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Unit price</label>
          </div>

          </form>
          
        </div>
      </div>
   
      
    </React.Fragment>
  );
};

export default AddItems;
