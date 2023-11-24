import { useRef } from "react";
import "./NavbarBottom.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Profile from "../../Profile/Profile";
import { SlHeart } from "react-icons/sl";
import CartComponent from "../../CartComponent/CartComponent";
import Searchbar from "../../SearchBar/Searchbar";

export default function NavbarBottom() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header className="bottom-navbar">
      <nav ref={navRef}>
        <div>Shirt</div>
        <div>Jeans</div>
        <div>Jogger</div>
        <div>Pants</div>
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
