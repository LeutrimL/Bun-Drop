import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../ShoppingCartContext";
import Navbar from "../components/Navbar";
import "./Payment.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [ccv, setCcv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [postNumber, setPostNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { cartItems, clearCart } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setErrorMessage("");
  };

  const handlePayment = () => {
    if (
      !name ||
      !surname ||
      !email ||
      !postNumber ||
      !address ||
      !paymentMethod ||
      (paymentMethod === "Swish" && phoneNumber.length !== 10) ||
      (paymentMethod === "Card" && (!cardNumber || !expiryDate || !ccv))
    ) {
      setErrorMessage(
        "Please fill out all required fields. Atleast 10 numbers!"
      );
      return;
    }

    if (paymentMethod === "Swish" && phoneNumber.length !== 10) {
      setErrorMessage("Swish number must be 10 digits.");
      return;
    }

    localStorage.setItem("orderItems", JSON.stringify(cartItems));
    clearCart();
    navigate("/confirmation");
  };

  return (
    <div>
      <Navbar />
      <div className="payment">
        <h1>Payment</h1>
        <div className="payment-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postNumber">Post Number</label>
            <input
              type="text"
              id="postNumber"
              value={postNumber}
              onChange={(e) => setPostNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Select Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="">Select...</option>
              <option value="Card">Card</option>
              <option value="Swish">Swish</option>
            </select>
          </div>
          {paymentMethod === "Card" && (
            <>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ccv">CCV</label>
                <input
                  type="text"
                  id="ccv"
                  value={ccv}
                  onChange={(e) => setCcv(e.target.value)}
                />
              </div>
            </>
          )}
          {paymentMethod === "Swish" && (
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handlePayment} className="payment-button">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
