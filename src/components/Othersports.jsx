import React from "react";

// importing smaller components
import OtherSportsBtn from "./OtherSportsBtn";
import Umsocialbtn from "./Umsocialbtn";

export default function Othersportd() {
  return (
    <div className="other-sports">
      <h2 className="yellow-text">Other UM Sports</h2>
      <OtherSportsBtn />
      <h2 className="yellow-text">UM Social Media</h2>
      <Umsocialbtn />
    </div>
  );
}
