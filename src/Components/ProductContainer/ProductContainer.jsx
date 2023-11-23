import { useFilterContext } from "../../Provider/filter_context";
import ProductList from "../ProductList/ProductList";
import Sidebar from "../Sidebar/Sidebar";
import Sorting from "../Sorting/Sorting";
import "./ProductContainer.css";

export default function ProductContainer() {
  const { filter_products } = useFilterContext();
  console.log("Filter", filter_products);
  return (
    <div className="product-container">
      <div>
        <Sidebar />
      </div>
      <section className="product-container-right">
        <div className="product-container-sort">
          <Sorting />
        </div>
        <div className="product-container-main">
          <ProductList />
        </div>
      </section>
    </div>
  );
}
