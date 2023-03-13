import React from "react";

export default function NavbarItem({ navItemName, navItemUrl }) {
  return (
    <li>
      <a href={navItemUrl}>{navItemName}</a>
    </li>
  );
}
