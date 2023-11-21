import { useProductContext } from "../../Provider/ProductContext";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import "./FeatureProduct.css";

export default function FeatuteProducts() {
  const { isLoading, trendingProducts } = useProductContext();
  console.log("trending", trendingProducts);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <h2 className="featured-heading">Featured Products</h2>
      <div className="feature-product-list">
        {trendingProducts.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}
