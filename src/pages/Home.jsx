import React from "react";

// importing website components
import Football from "../components/Football";
import Othersport from "../components/Othersports";
import Basketball from "../components/Basketball";

export default function Home() {
  return (
    <div>
      <Football />
      <Othersport />
      <Basketball />
    </div>
  );
}
