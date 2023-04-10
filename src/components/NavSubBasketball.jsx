import React from "react";

// importing navbar li component
import NavbarUrl from "./NavbarListUrl";
import NavbarLink from "./NavbarLink";

export default function NavbarSubBasketball() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Basketball</button>
      <div className="dropdown-content">
        <NavbarLink navLink="/basketballschedule" navText="Schedule" />
        <NavbarUrl
          navListUrl="https://bigten.org/standings.aspx?path=mbball"
          navListText="B1G Standings"
        />
        <NavbarLink navLink="/basketballroster" navText="Roster" />
      </div>
    </div>
  );
}
