import React from "react";

// importing football roster data
import roster from "./football-roster.json";

// importing smaller component roster item
import RosterItem from "./RosterItem";

// declaring variable to be used to access data
const michiganFootballRoster = roster.footballroster;

export default function FootballRoster() {
  return (
    <table className="mb-5">
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Pos.</th>
        <th>Class</th>
      </tr>

      {michiganFootballRoster.map((footballroster, index) => (
        <RosterItem
          rosterNumber={footballroster.Number}
          playerRoster={footballroster.Player}
          rosterPosition={footballroster.Position}
          rosterClass={footballroster.Class}
        />
      ))}
    </table>
  );
}
