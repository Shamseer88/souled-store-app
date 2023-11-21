import React from "react";
import { SlHandbag } from "react-icons/sl";
import "./CartComponent.css";

export default function CartComponent() {
  return (
    <div className="cart-component">
      <SlHandbag size={20} className="navbar-icons cart-icon" />
      <span>0</span>
    </div>
  );
}
