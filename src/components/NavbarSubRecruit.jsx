import React from "react";

// importing navbar li component
import NavbarList from "./NavbarListUrl";

export default function NavbarSubRecruit() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Recruiting</button>
      <div className="dropdown-content">
        <NavbarList navListUrl="https://google.com" navListText="Football" />
        <NavbarList navListUrl="https://google.com" navListText="Basketball" />
      </div>
    </div>
  );
}
