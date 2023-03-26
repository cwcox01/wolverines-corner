import React from "react";

// importing smaller FooterNavItem component
import FooterLink from "./FooterLink";

export default function FooterNav() {
  return (
    <nav className="footer-nav">
      <ul className="pt-3">
        <FooterLink navLink="/" navText="Home" />
        <FooterLink navLink="/footballschedule" navText="Football" />
        <FooterLink navLink="/basketballschedule" navText="Basketball" />
      </ul>
    </nav>
  );
}
