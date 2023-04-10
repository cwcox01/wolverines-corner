import React from "react";
import { Link } from "react-router-dom";

// importing smaller component
import NavbarSubFootball from "./NavbarSubFootball";
import NavbarSubBasketball from "./NavSubBasketball";
import NavbarSubRecruit from "./NavbarSubRecruit";

const siteHeaderLinkStyle = {
  textDecoration: "none",
  color: "#ffcb05",
};

export default function Navbar() {
  return (
    <div className="nav-bar">
      <Link to="/" style={siteHeaderLinkStyle}>
        <h1 className="section-heading ps-3 pb-3 pt-3">
          Wolverines <br /> Corner
        </h1>
      </Link>
      <div className="topnav">
        <NavbarSubFootball />
        <NavbarSubBasketball />
        <NavbarSubRecruit />
      </div>
    </div>
  );
}
