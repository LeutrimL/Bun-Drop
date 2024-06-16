import React from "react";
import "./NavbarMenu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavbarMenu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <button className="home-button">Home</button>
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

export default NavbarMenu;
