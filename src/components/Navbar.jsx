import React from "react";

// importing smaller component
import NavbarList from "./NavbarList";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h1 className="section-heading">Wolverines</h1>
      <NavbarList />
    </div>
  );
}
