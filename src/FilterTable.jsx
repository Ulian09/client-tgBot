import React, { useState } from 'react';

const FilterTable = ({ data, setFilteredData }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    const filteredData = data.filter((item) =>
      item.customer_name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by customer name"
        value={filterText}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Phone</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_name}</td>
              <td>{order.product_name}</td>
              <td>{order.phone_number}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterTable;
