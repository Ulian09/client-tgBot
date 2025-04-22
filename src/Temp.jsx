import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
import Navbar from './Navbar';
import GetOrders from './GetOrders';
import RequestForm from './RequestForm';
import FilterTable from './FilterTable'; // Новый компонент

const Temp = () => {
  const [form, setForm] = useState({
    order_number: "",
    customer_name: "",
    phone_number: "",
    product_name: "",
    price: 0,
    quantity: 1
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]); // Данные для фильтрации
  const [showOrders, setShowOrders] = useState(false);
  const [filterMode, setFilterMode] = useState(false); // Режим фильтрации

  const apiUrl = "http://127.0.0.1:8000";

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/order`, form, {
        headers: { "Content-Type": "application/json" }
      });
      setMessage('заказ создан');
    } catch (error) {
      setMessage('ошибка');
    }
    setLoading(false);
  };

  const getOrders = async () => {
    setLoading(true);
    setShowOrders(true);
    try {
      const response = await axios.get(`${apiUrl}/orders`);
      setOrders(response.data.orders);
      setFilteredOrders(response.data.orders); // Изначально показываем все заказы
      setMessage('заказы успешно обработаны');
    } catch (error) {
      setMessage('ошибка');
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <>
      <Navbar
        setShowOrders={setShowOrders}
        getOrders={getOrders}
        setFilterMode={setFilterMode} // Добавляем переключение фильтра
      />
      <div className='container'>
        {showOrders ? (
          filterMode ? (
            <FilterTable data={orders} setFilteredData={setFilteredOrders} />
          ) : (
            <GetOrders orders={filteredOrders} />
          )
        ) : (
          <RequestForm form={form} handleChange={handleChange} sendOrder={sendOrder} />
        )}
      </div>
    </>
  );
};

export default Temp;
