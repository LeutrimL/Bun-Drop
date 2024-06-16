import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/menu">
            <button className="menu-button">Menu</button>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/cart">
            <button className="cart-button">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
