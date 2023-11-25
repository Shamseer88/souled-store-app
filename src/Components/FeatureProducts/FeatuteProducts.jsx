import { useProductContext } from "../../Provider/ProductContext";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import "./FeatureProduct.css";

// ---------------------------------
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// -------------------------------------

export default function FeatuteProducts() {
  const { isLoading, trendingProducts } = useProductContext();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <h2 className="featured-heading">New Arrivals</h2>
      <div className="feature-product-carousal">
        <Carousel responsive={responsive}>
          {trendingProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
