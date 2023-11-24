import { useRef } from "react";
import "./NavbarBottom.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Profile from "../../Profile/Profile";
import { SlHeart } from "react-icons/sl";
import CartComponent from "../../CartComponent/CartComponent";
import Searchbar from "../../SearchBar/Searchbar";
import { useFilterContext } from "../../../Provider/filter_context";

export default function NavbarBottom() {
  // --------------------------
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
  // -------------------------
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header className="bottom-navbar">
      <nav ref={navRef}>
        {/* <div>Shirt</div>
        <div>Jeans</div>
        <div>Jogger</div>
        <div>Pants</div> */}
        <div className="header-nav">
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

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <div className="navbar-bottom-right">
        <Searchbar />
        <Profile />
        <SlHeart size={16} className="navbar-icons" />
        <CartComponent />
      </div>
    </header>
  );
}
