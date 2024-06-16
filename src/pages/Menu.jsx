import React, { useState, useEffect, useContext } from "react";
import NavbarMenu from "../components/NavbarMenu";
import { ShoppingCartContext } from "../ShoppingCartContext";
import "./Menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { addToCart, removeFromCart } = useContext(ShoppingCartContext);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        setFilteredItems(data);
      })
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === filter));
    }
  }, [filter, menuItems]);

  return (
    <div className="menu">
      <NavbarMenu />
      <h1 className="Rubrik">Menu</h1>
      <div className="filter-container">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="burgers">Burgers</option>
          <option value="sides">Sides</option>
        </select>
      </div>
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img
              src={item.image}
              alt={item.title}
              className="menu-item-image"
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
