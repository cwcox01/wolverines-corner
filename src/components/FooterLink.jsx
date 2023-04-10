import React from "react";
import { Link } from "react-router-dom";

export default function FooterLink({ navLink, navText }) {
  return (
    <Link to={navLink} className="pe-4">
      {navText}
    </Link>
  );
}
