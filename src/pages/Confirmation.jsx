import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Confirmation.css";

const Confirmation = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState("");

  useEffect(() => {
    const storedOrderItems = JSON.parse(localStorage.getItem("orderItems"));
    if (storedOrderItems) {
      setOrderItems(storedOrderItems);
    }

    const min = 30;
    const max = 60;
    const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
    setDeliveryTime(`${randomTime} minutes`);

    localStorage.removeItem("orderItems");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="confirmation">
        <h1>Thank you for your order!</h1>
        <p>
          We have received your order and it will be delivered in approximately:
        </p>
        <h2>{deliveryTime}</h2>
        <h3>Order Summary</h3>
        <ul>
          {orderItems.map((item) => (
            <li key={item.id}>
              <span className="item-title">{item.title}</span>
              <span className="item-quantity">Quantity: {item.quantity}</span>
              <span className="item-price">
                Price: ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <p>Thank you for choosing our service!</p>
      </div>
    </div>
  );
};

export default Confirmation;
