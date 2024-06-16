import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../ShoppingCartContext";
import Navbar from "../components/Navbar";
import "./Cart.css";

const Cart = () => {
  const { cartItems, changeQuantity, removeFromCart, totalPrice } =
    useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 0) {
      changeQuantity(id, quantity);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div>
      <Navbar />
      <div className="cart">
        <h1 className="TitelCart">Your Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <div className="cart-item-quantity">
                  <button
                    className="buttonminus"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  />
                  <button
                    className="buttonplus"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <h2 className="cart-total">Total Price: ${totalPrice.toFixed(2)}</h2>
        <button onClick={handleCheckout} className="checkout-button">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
