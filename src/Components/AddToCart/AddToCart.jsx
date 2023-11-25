import { useState } from "react";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import "./AddToCart.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../Provider/cart_context";

export default function AddToCart({ product }) {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const { id } = product;
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    setAmount(amount + 1);
  };
  return (
    <div className="add-to-cart">
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div onClick={() => addToCart(id, amount, product)}>
        <button
          className="single-product-add-to-cart-btn"
          onClick={() => navigate("/cart")}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
