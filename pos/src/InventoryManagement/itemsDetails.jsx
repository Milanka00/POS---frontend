import React from "react";
import { useEffect, useState } from "react";

const ItemDetails = () => {
  const [data, setData] = useState([]);
  //get request
  useEffect(() => {
    fetch("http://localhost:8080/ItemDetails/viewAllItems")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <h2>Item Details</h2>
      <div className=" d-flex justify-content-center ">
        <div className="w-75">
          <table class="table table-striped m-2 table-secondary">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item name</th>
                <th scope="col">Item Category</th>
                <th scope="col">Unit price</th>
                <th scope="col">Current Storage</th>
              </tr>
            </thead>
            <tbody>
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
};

export default ItemDetails;
