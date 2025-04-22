import React from 'react';
import "./App.css"
const RequestForm = ({form, handleChange,sendOrder}) => {
    
    return (
        <form onSubmit={sendOrder}>
            <h3>Leave a request</h3>
            <input onChange={handleChange} value={form.order_number} name='order_number' type="text" placeholder='Order Number' className='order-number-input' required/>
            <input onChange={handleChange} value={form.customer_name} name='customer_name' type="text" placeholder='Enter Name' className='name-input' required />
            <input onChange={handleChange} value={form.phone_number} name='phone_number' type="text" placeholder='Enter Phone' className='phone-input' required />
            <input onChange={handleChange} value={form.product_name} name='product_name' type="text" placeholder='Product Name' className='product-input' required />
            <div className='price-quantity-container'>
            <input onChange={handleChange} value={form.price} name='price' type="number" placeholder='Price' className='price-input' required />
            <input onChange={handleChange} value={form.quantity} name='quantity' type="number" placeholder='Quantity' className='quantity-input' required />
            </div>
            <button className='sise-button' type='submit'>Create Order</button>
      </form>
    );
};

export default RequestForm;