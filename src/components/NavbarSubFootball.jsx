import React from "react";

// importing smaller component
import NavbarLink from "./NavbarLink";
import NavbarUrl from "./NavbarListUrl";

export default function NavbarSubFootball() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Football</button>
      <div className="dropdown-content">
        <NavbarLink navLink="/footballschedule" navText="Schedule" />
        <NavbarUrl
          navListUrl="https://bigten.org/standings.aspx?path=football"
          navListText="B1G Standings"
        />
        <NavbarLink navLink="/footballroster" navText="Roster" />
      </div>
    </div>
  );
}
