import { useFilterContext } from "../../Provider/filter_context";
import "./Searchbar.css";

export default function Searchbar() {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
