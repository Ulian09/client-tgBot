import React from "react";
import "./App.css";

const Navbar = ({ setShowOrders, getOrders, setFilterMode }) => {
  return (
    <div className="menu">
      <h3>pisichi i pisiunciki</h3>
      <div>
        <button onClick={getOrders}>Get Orders</button>
        <button className="send_btn" onClick={() => { setShowOrders(false); setFilterMode(false); }}>Send Order</button>
        <button onClick={() => { getOrders(); setFilterMode(true); }}>Filter Orders</button>
      </div>
    </div>
  );
};

export default Navbar;