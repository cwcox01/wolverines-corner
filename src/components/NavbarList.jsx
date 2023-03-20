import React from "react";

export default function NavbarList({ navListUrl, navListText }) {
  return <a href={navListUrl}>{navListText}</a>;
}
