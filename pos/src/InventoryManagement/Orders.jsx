// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";

const IssueItems = (props) => {


  return (
    <React.Fragment>
      {/* <h1>{item1}</h1> */}
      <h2>Order Details</h2>
      <div className=" d-flex justify-content-center ">
        <div className="w-75">
        <table class="table table-striped m-2 table-secondary">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">User ID</th>
                <th scope="col">Username</th>
                <th scope="col">Order Date</th>
                <th scope="col">Address</th>
                <th scope="col">Method</th>
                <th scope="col">Ready to shipment</th>
              </tr>
            </thead>
            <tbody>
              {/* static data format */}
            <tr>
                <td scope="col">0012</td>
                <td scope="col">U_203K</td>
                <td scope="col">Siriwarndena yapa</td>
                <td scope="col">2023-11-15</td>
                <td scope="col">Galle</td>
                <td scope="col">Delivery</td>
                {/* onclick send record to delivery section */}
                <td scope="col"><button className="btn btn-warning">Ready</button></td>
              </tr>
              {/* change accordingly */}
              {/* {data.map(
                (item) => (
                  console.log(item.name),
                  (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  )
                )
              )} */}
            </tbody>
          </table>

          
        </div>
      </div>

   
    </React.Fragment>
  );

}
 
export default IssueItems;