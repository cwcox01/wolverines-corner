import React from "react";

// importing smaller components
import FooterNav from "./FooterNav";
import FooterText from "./FooterText";

export default function Footer() {
  return (
    <footer>
      <FooterText />
      <FooterNav />
    </footer>
  );
}
