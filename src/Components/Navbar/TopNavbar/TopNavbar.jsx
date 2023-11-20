import { NavLink } from "react-router-dom";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Logo from "../../Logo/Logo";
import "./TopNavbar.css";

export default function TopNavbar() {
  const activeLink = ({ isActive }) => (isActive ? "active" : "link");
  return (
    <div className="topnav">
      <div className="left">
        <Logo />
      </div>
      <div className="center">
        <NavLink to="/" className={activeLink}>
          ALL
        </NavLink>
        <NavLink to="/men" className={activeLink}>
          MEN
        </NavLink>
        <NavLink to="/women" className={`${activeLink} women-link`}>
          WOMEN
        </NavLink>
      </div>
      <div className="right">
        <p>
          <MdOutlinePhoneAndroid size={13} color="#fff" />
          DOWNLOAD APP
        </p>
      </div>
    </div>
  );
}
