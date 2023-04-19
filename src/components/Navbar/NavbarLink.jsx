import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLink({ navLink, navText }) {
  return <Link to={navLink}>{navText}</Link>;
}
