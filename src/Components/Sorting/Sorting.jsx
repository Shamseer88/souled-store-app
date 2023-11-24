import "./Sorting.css";

export default function Sorting({ sorting }) {
  return (
    <div className="sort-container">
      <form>
        <select name="sort" id="sort" onClick={sorting}>
          <option value="">Sort By:</option>
          <option value="lowest">Price (Lowest to Highest)</option>
          <option value="highest">Price (Highest to Lowest)</option>
          <option value="atoz">A - Z</option>
          <option value="ztoa">Z - A</option>
        </select>
      </form>
    </div>
  );
}
