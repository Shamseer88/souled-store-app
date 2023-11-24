import { useFilterContext } from "../../Provider/filter_context";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList() {
  const { filter_products } = useFilterContext();
  return (
    <>
      <div className="product-list">
        {filter_products &&
          filter_products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </>
  );
}
