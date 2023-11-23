import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNavigation.css";

export default function PageNavigation({ title }) {
  return (
    <div className="page-navigation-div">
      <NavLink to="/" className="page-navigation-home">
        Home
      </NavLink>
      &nbsp; / {title}
    </div>
  );
}
