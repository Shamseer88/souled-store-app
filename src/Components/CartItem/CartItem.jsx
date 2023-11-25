import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import "./CartItem.css";
import { useCartContext } from "../../Provider/cart_context";

export default function CartItem({ id, name, price, amount, image }) {
  const { removeItemFromCart, setDecrease, setIncrease } = useCartContext();

  return (
    <div className=".cart-container">
      <div className="cart-container-body">
        <div className="cart-image-name">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p className="cart-responsive-price">₹{price}</p>
        </div>
        <div className="cart-hide">
          <p className="cart-item-price">₹{price}</p>
        </div>
        <div className="cart-quantity">
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        </div>
        <div className="cart-total cart-hide">₹{price * amount}</div>
        <div className="cart-delete-div">
          <FaTrash
            className="cart-delete-icon"
            onClick={() => removeItemFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
}
