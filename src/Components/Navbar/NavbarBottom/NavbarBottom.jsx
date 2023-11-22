import { useRef } from "react";
import "./NavbarBottom.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Profile from "../../Profile/Profile";
import { SlHeart } from "react-icons/sl";
import CartComponent from "../../CartComponent/CartComponent";

export default function NavbarBottom() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <nav ref={navRef}>
        <p>Shirt</p>
        <p>Jeans</p>
        <p>Jogger</p>
        <p>Pants</p>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <div className="navbar-bottom-right">
        <input type="text" placeholder="Search..." />
        <Profile />
        <SlHeart size={16} className="navbar-icons" />
        <CartComponent />
      </div>
    </header>
  );
}
