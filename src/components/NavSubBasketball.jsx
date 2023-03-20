import React from "react";

// importing navbar li component
import NavbarList from "./NavbarList";

export default function NavbarSubBasketball() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Basketball</button>
      <div class="dropdown-content">
        <NavbarList navListUrl="https://google.com" navListText="Google" />
        <NavbarList navListUrl="https://google.com" navListText="Google" />
        <NavbarList navListUrl="https://google.com" navListText="Google" />
      </div>
    </div>
  );
}
