import React from "react";

export default function RosterItem({
  rosterNumber,
  playerRoster,
  rosterPosition,
  rosterClass,
}) {
  return (
    <tr>
      <td>{rosterNumber}</td>
      <td>{playerRoster}</td>
      <td>{rosterPosition}</td>
      <td>{rosterClass}</td>
    </tr>
  );
}
