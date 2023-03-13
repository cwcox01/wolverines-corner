import React from "react";

// importing navbar li component
import NavbarItem from "./NavbarItem";

export default function NavbarSubFootball() {
  return (
    <ul>
      <NavbarItem navItemName="Schedule" navItemUrl="#" />
      <NavbarItem navItemName="Standings" navItemUrl="#" />
      <NavbarItem navItemName="Future Schedule" navItemUrl="#" />
      <NavbarItem navItemName="Roster" navItemUrl="#" />
    </ul>
  );
}
