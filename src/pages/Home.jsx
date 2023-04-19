import React from "react";

// importing website components
import Football from "../components/Football/Football";
import Othersport from "../components/Othersports/Othersports";
import Basketball from "../components/Basketball/Basketball";

export default function Home() {
  return (
    <div>
      <Football />
      <Othersport />
      <Basketball />
    </div>
  );
}
