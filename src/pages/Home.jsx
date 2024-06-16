import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => setMenuItems(data.slice(0, 3)));
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="logo-container">
        <img src="/Images/logohome.png" alt="Logo" className="logo" />
      </div>
      <div className="highlights">
        {menuItems.map((item) => (
          <div key={item.id} className="highlight-box" id="boxshadow">
            <img
              src={item.image}
              alt={item.title}
              className="highlight-image"
            />
            <h1>{item.title}</h1>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
