import React from "react";

// importing smaller component other sports item
import OtherSportsItem from "./OtherSportsItem";

export default function OtherSportsBtn() {
  return (
    <div className="other-sports-btn">
      <OtherSportsItem
        otherSportsUrl="https://mgoblue.com/sports/mens-ice-hockey"
        otherSportsText="Ice Hockey"
      />
      <OtherSportsItem
        otherSportsUrl="https://mgoblue.com/sports/baseball"
        otherSportsText="Baseball"
      />
      <OtherSportsItem
        otherSportsUrl="https://mgoblue.com/sports/mens-soccer"
        otherSportsText="Men's Soccer"
      />
      <OtherSportsItem
        otherSportsUrl="https://mgoblue.com/sports/wrestling"
        otherSportsText="Wrestling"
      />
      <OtherSportsItem
        otherSportsUrl="https://mgoblue.com/sports/womens-basketball"
        otherSportsText="Womens Basketball"
      />
      <OtherSportsItem
        otherSportsUrl="https://mgoblue.com/sports/womens-soccer"
        otherSportsText="Womens Soccer"
      />
      <OtherSportsItem
        otherSportsUrl="https://mgoblue.com/sports/softball"
        otherSportsText="Softball"
      />
    </div>
  );
}
