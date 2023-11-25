import { useEffect, useState } from "react";
import "./SingleProduct.css";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../Provider/ProductContext";
import PageNavigation from "../../Components/PageNavigation/PageNavigation";
import Loader from "../../Components/Loader/Loader";
import Star from "../../Components/Star/Star";
import AddToCart from "../../Components/AddToCart/AddToCart";

const API = "https://academics.newtonschool.co/api/v1/ecommerce/product/";

export default function SingleProduct() {
  const [mainImage, setMainImage] = useState(0);
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  console.log("Product id", id);

  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(`${API}${id}`);
  }, []);

  console.log(singleProduct);
  if (isSingleLoading) {
    return <Loader />;
  }
  const {
    images = [""],
    name,
    brand,
    subCategory,
    price,
    size = [""],
    description,
    ratings,
    reviews = [""],
  } = singleProduct;
  return (
    <>
      <PageNavigation title={name} />
      <div className="single-product-container">
        <div className="single-product-left">
          <div className="image-grid">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
          <div className="single-product-main-image">
            <img src={images[mainImage]} alt="" />
          </div>
        </div>
        <div className="single-product-right">
          <div className="single-product-name">
            <h3>
              {name} : {brand}
            </h3>
            <p>
              {subCategory} - <Star rating={ratings} /> ({reviews.length}{" "}
              reviews)
            </p>
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
          <AddToCart product={singleProduct} />
          <div className="cart-wishlist-btns">
            <button className="single-product-add-to-wishlist-btn">
              <FaRegHeart size={12} />
              &nbsp;Add to wishlist
            </button>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h3 className="single-product-description-heading">
              Product Details:
            </h3>
            <p style={{ maxWidth: "600px" }}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
