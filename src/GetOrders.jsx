import React from 'react';
import "./App.css"

const GetOrders = ({orders}) => {
   
    return (
        <div className='result'>
            <h3>Orders List</h3>
            <table>
            <thead>
            <tr className='table-head'>
                <th>Order Number</th>
                <th>Name</th>
                <th>Product</th>
                <th>Phon</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            </thead>
            {orders.map((order) =>(
                <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer_name}</td>
                <td>{order.product_name}</td>
                <td>{order.phone_number}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                </tr>
            ))}
            </table>
        </div>
    );
};

export default GetOrders;