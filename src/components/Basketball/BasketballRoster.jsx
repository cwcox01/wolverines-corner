import React from "react";

// importing football roster data
import roster from "./basketball-roster.json";

// importing smaller component roster item
import RosterItem from "./RosterItem";

// declaring variable to be used to access data
const michiganBasketballRoster = roster.basketballroster;

export default function BasketballRoster() {
  return (
    <table className="mb-5">
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Pos.</th>
        <th>Class</th>
      </tr>

      {michiganBasketballRoster &&
        michiganBasketballRoster.map((basketballroster) => (
          <RosterItem
            rosterNumber={basketballroster.Number}
            playerRoster={basketballroster.Player}
            rosterPosition={basketballroster.Position}
            rosterClass={basketballroster.Class}
          />
        ))}
    </table>
  );
}
