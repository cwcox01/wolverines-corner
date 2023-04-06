import React from "react";

// importing smaller components
import FooterNav from "./FooterNav";
import FooterText from "./FooterText";

export default function Footer() {
  return (
    <footer className="d-flex align-items-center flex-column">
      <FooterText />
      <FooterNav />
    </footer>
  );
}
