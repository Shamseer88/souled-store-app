import { useFilterContext } from "../../Provider/filter_context";
import ProductList from "../ProductList/ProductList";
import Sidebar from "../Sidebar/Sidebar";
import Sorting from "../Sorting/Sorting";
import "./ProductContainer.css";

export default function ProductContainer() {
  const { filter_products, sorting } = useFilterContext();

  return (
    <>
      <h2 className="all-heading">All Products</h2>
      <div className="product-container">
        <div>
          <Sidebar />
        </div>
        <section className="product-container-right">
          <div className="product-container-sort">
            <Sorting sorting={sorting} />
          </div>
          <div className="product-container-main">
            <ProductList />
          </div>
        </section>
      </div>
    </>
  );
}
