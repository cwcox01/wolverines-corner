import React from "react";

// importing smaller component
import NavbarList from "./NavbarList";

export default function NavbarSubFootball() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Football</button>
      <div class="dropdown-content">
        <NavbarList navListUrl="https://google.com" navListText="Google" />
        <NavbarList navListUrl="https://google.com" navListText="Google" />
        <NavbarList navListUrl="https://google.com" navListText="Google" />
      </div>
    </div>
  );
}
