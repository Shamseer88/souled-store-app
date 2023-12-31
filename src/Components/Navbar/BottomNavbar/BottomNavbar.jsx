import "./BottomNavbar.css";
import { SlHandbag, SlHeart } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../Provider/UserProvider";
import Profile from "../../Profile/Profile";
import CartComponent from "../../CartComponent/CartComponent";

export default function BottomNavbar() {
  const { setUserContext: signOutContext, isUserLoggedIn } = useUser();
  let loginUsername = sessionStorage.getItem("userInfo");
  const navigate = useNavigate();
  return (
    <nav className="bottom-nav">
      <div className="left">
        <p>Shirt</p>
        <p>Jeans</p>
        <p>Jogger</p>
        <p>Pants</p>
        <RxHamburgerMenu
          size={20}
          color="#58595b"
          className="hamburger-mewnu"
        />
      </div>
      <AiOutlineClose />
      <div className="right">
        <input type="text" placeholder="Search..." />
        <Profile />
        <SlHeart size={20} className="navbar-icons" />
        <CartComponent />
      </div>
    </nav>
  );
}
