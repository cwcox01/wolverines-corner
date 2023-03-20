import React from "react";

// importing smaller components
import OtherSportsBtn from "./OtherSportsBtn";
import Umsocialbtn from "./Umsocialbtn";

export default function Othersportd() {
  return (
    <div className="other-sports">
      <div className="um-other-sports pt-5">
        <h2 className="yellow-text">Other UM Sports</h2>
        <OtherSportsBtn />
      </div>
      <div className="pt-5 um-social-media">
        <h2 className="yellow-text">UM Social Media</h2>
        <Umsocialbtn />
      </div>
    </div>
  );
}
