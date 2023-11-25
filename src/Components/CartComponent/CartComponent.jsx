import React from "react";
import { SlHandbag } from "react-icons/sl";
import "./CartComponent.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../Provider/cart_context";

export default function CartComponent() {
  const { total_item } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="cart-component" onClick={() => navigate("/cart")}>
      <SlHandbag size={16} className="navbar-icons cart-icon" />
      <span>{total_item}</span>
    </div>
  );
}
