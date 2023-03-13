import React from "react";

// importing website components
import Navbar from "./Navbar";
import Football from "./Football";
import Footer from "./Footer";
import Othersport from "./Othersports";
import Basketball from "./Basketball";

export default function App() {
  return (
    <div className="site-container">
      <Navbar />
      <Football />
      <Othersport />
      <Basketball />
      <Footer />
    </div>
  );
}
