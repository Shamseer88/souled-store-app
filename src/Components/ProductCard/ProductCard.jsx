import { NavLink } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const {
    _id = "",
    name = "",
    displayImage = "",
    brand = "",
    price = 0,
  } = product;
  return (
    <NavLink to={`/single-product/${_id}`}>
      <div className="product-card">
        <div className="product-image-div">
          <img
            src={displayImage}
            alt={name}
            width="100%"
            className="product-image"
          />
        </div>
        <div className="product-brand-div">
          <p>Brand : {brand}</p>
        </div>
        <p className="product-name">{name}</p>
        <h5 className="product-price">₹{price}</h5>
      </div>
    </NavLink>
  );
}
