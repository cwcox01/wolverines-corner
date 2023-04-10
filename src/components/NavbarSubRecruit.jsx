import React from "react";

// importing navbar li component
import NavbarList from "./NavbarListUrl";

export default function NavbarSubRecruit() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Recruiting</button>
      <div className="dropdown-content">
        <NavbarList
          navListUrl="https://247sports.com/college/michigan/Season/2024-Football/Commits/"
          navListText="Football"
        />
        <NavbarList
          navListUrl="https://247sports.com/college/michigan/Season/2023-Basketball/Commits/"
          navListText="Basketball"
        />
      </div>
    </div>
  );
}
