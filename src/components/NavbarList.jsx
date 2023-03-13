import React from "react";

// importing smaller navbar component
import NavbarItem from "./NavbarItem";
import NavbarSubFootball from "./NavbarSubFootball";
import NavbarSubBasketball from "./NavSubBasketball";
import NavbarSubRecruit from "./NavbarSubRecruit";

export default function NavbarList() {
  return (
    <div>
      <nav>
        <ul>
          <NavbarItem navItemName="Football" navItemUrl="#" />
          <NavbarSubFootball />
          <NavbarItem navItemName="Basketball" navItemUrl="#" />
          <NavbarSubBasketball />
          <NavbarItem navItemName="Recruiting" navItemUrl="#" />
          <NavbarSubRecruit />
        </ul>
      </nav>
    </div>
  );
}
