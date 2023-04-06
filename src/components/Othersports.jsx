import React from "react";

// importing smaller components
import OtherSportsBtn from "./OtherSportsBtn";
import Umsocialbtn from "./Umsocialbtn";

export default function Othersportd() {
  return (
    <div className="other-sports" id="other-sports">
      <div className="um-other-sports pt-5 d-flex align-items-center flex-column">
        <h2 className="yellow-text">Other UM Sports</h2>
        <OtherSportsBtn />
      </div>
      <div
        className="pt-5 um-social-media d-flex align-items-center flex-column"
        id="um-social-media"
      >
        <h2 className="yellow-text">UM Social Media</h2>
        <Umsocialbtn />
      </div>
    </div>
  );
}
