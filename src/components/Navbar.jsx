import React from "react";

// importing smaller component
import NavbarSubFootball from "./NavbarSubFootball";
import NavbarSubBasketball from "./NavSubBasketball";
import NavbarSubRecruit from "./NavbarSubRecruit";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h1 className="section-heading">Wolverines</h1>
      <div className="wolverine-nav">
        <NavbarSubFootball />
        <NavbarSubBasketball />
        <NavbarSubRecruit />
      </div>
    </div>
  );
}
