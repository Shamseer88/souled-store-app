import { useFilterContext } from "../../Provider/filter_context";
import "./Sidebar.css";

export default function Sidebar() {
  const {
    all_products,
    updateFilterValue,
    filters: { subCategory },
  } = useFilterContext();
  // To get unique categories
  const getUniqueData = (data, property) => {
    let newVal = data.map((curEle) => {
      return curEle[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  const categoryOnlyData = getUniqueData(all_products, "subCategory");
  return (
    <div className="sidebar-div">
      <h3>Catgory</h3>
      <div className="sidebar-category">
        {categoryOnlyData.map((curEle, index) => {
          return (
            <button
              key={index}
              type="button"
              name="subCategory"
              value={curEle}
              onClick={updateFilterValue}
            >
              {curEle}
            </button>
          );
        })}
      </div>
    </div>
  );
}
