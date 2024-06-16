import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import "./index.css";
import { ShoppingCartProvider } from "./ShoppingCartContext";

ReactDOM.render(
  <ShoppingCartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </Router>
  </ShoppingCartProvider>,
  document.getElementById("root")
);
