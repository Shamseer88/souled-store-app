import { useNavigate } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";
import { useCartContext } from "../../Provider/cart_context";
import "./Cart.css";

export default function Cart() {
  const { cart, clearCart, total_price } = useCartContext();
  const navigate = useNavigate();
  if (cart.length === 0) {
    return (
      <div className="no-item-div">
        <h1>No items in the cart!</h1>
        <button
          onClick={() => navigate("/products")}
          className="continue-shopping-btn"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="cart-container">
        <div className="cart-heading">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curEle) => (
            <CartItem key={curEle.id} {...curEle} />
          ))}
        </div>
        <hr />
        <div className="cart-buttons-div">
          <button
            onClick={() => navigate("/products")}
            className="continue-shopping-btn"
          >
            Continue Shopping
          </button>
          <button className="cart-clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className="cart-total-div">
          <div className="cart-total-inner">
            <div className="cart-total-p">Total :</div>
            <div className="cart-total-amount"> &nbsp;₹ {total_price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
