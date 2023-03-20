import React from "react";

// importing navbar li component
import NavbarList from "./NavbarList";

export default function NavbarSubRecruit() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Recruiting</button>
      <div class="dropdown-content">
        <NavbarList navListUrl="https://google.com" navListText="Google" />
        <NavbarList navListUrl="https://google.com" navListText="Google" />
        <NavbarList navListUrl="https://google.com" navListText="Google" />
      </div>
    </div>
  );
}
