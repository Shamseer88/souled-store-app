import { useEffect } from "react";
import "./SingleProduct.css";
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../Provider/ProductContext";

const API = "https://academics.newtonschool.co/api/v1/ecommerce/product/";

export default function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  console.log("Product id", id);

  useEffect(() => {
    getSingleProduct(`${API}${id}`);
  }, []);

  console.log(singleProduct);
  if (isSingleLoading) {
    return (
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
      >
        .....Loading
      </h3>
    );
  }
  const { images, name, brand, subCategory, price, size, description } =
    singleProduct;
  return (
    <>
      <div className="single-product-container">
        <div className="single-product-left">
          <div className="image-grid">
            {images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} />
            ))}
          </div>
        </div>
        <div className="single-product-right">
          <div className="single-product-name">
            <h3>
              {name} : {brand}
            </h3>
            <p>{subCategory}</p>
          </div>
          <hr />
          <div className="single-product-price">
            <h3>₹{price}</h3>
          </div>
          <div className="single-product-size">
            <p>Please select a size:</p>
            <div className="single-product-size-btns">
              {size.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
            </div>
          </div>
          <div className="single-product-quantity">
            <label htmlFor="quantity">Quantity : </label>
            <select name="quantity" id="quantity">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="cart-wishlist-btns">
            <button className="single-product-add-to-cart-btn">
              Add to cart
            </button>
            <button className="single-product-add-to-wishlist-btn">
              <FaRegHeart size={12} />
              &nbsp;Add to wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="single-product-description">
        <h3 className="single-product-description-heading">Product Details:</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
