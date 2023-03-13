import React from "react";

// importing smaller component other sports item
import OtherSportsItem from "./OtherSportsItem";

export default function OtherSportsBtn() {
  return (
    <div className="other-sports-btn">
      <OtherSportsItem
        otherSportsUrl="https://google.com"
        otherSportsText="Google"
      />
    </div>
  );
}
