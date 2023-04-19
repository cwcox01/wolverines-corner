import React from "react";

export default function NavbarUrl({ navListUrl, navListText }) {
  return (
    <a href={navListUrl} target="_blank" rel="noreferrer">
      {navListText}
    </a>
  );
}
