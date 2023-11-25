import CartItem from "../../Components/CartItem/CartItem";
import { useCartContext } from "../../Provider/cart_context";
import "./Cart.css";

export default function Cart() {
  const { cart } = useCartContext();
  console.log("cart", cart);
  return (
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
    </div>
  );
}
