import { useFilterContext } from "../../Provider/filter_context";
import Searchbar from "../SearchBar/Searchbar";
import "./Sidebar.css";

export default function Sidebar() {
  const {
    all_products,
    updateFilterValue,
    filters: { subCategory, brand },
  } = useFilterContext();
  // To get unique categories
  const getUniqueData = (data, property) => {
    let newVal = data.map((curEle) => {
      return curEle[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  const categoryOnlyData = getUniqueData(all_products, "subCategory");
  const companyData = getUniqueData(all_products, "brand");
  console.log("comapanies", companyData);
  return (
    <div className="sidebar-div">
      <div className="sidebar-search">
        <Searchbar />
      </div>
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
      <div className="sidebar-company">
        <h3>Brand</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <select name="brand" id="brand" onClick={updateFilterValue}>
            {companyData.map((company, index) => (
              <option key={index} value={company} name="brand">
                {company}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}
