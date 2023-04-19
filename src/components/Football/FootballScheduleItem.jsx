import React from "react";

export default function FootballScheduleItem({
  footballGameDate,
  footballGameTime,
  footballGameAt,
  footballGameOpponent,
  footballGameScore,
  footballGameResult,
}) {
  return (
    <tr>
      <td>{footballGameDate}</td>
      <td>{footballGameTime}</td>
      <td>{footballGameAt}</td>
      <td>{footballGameOpponent}</td>
      <td>{footballGameScore}</td>
      <td>{footballGameResult}</td>
    </tr>
  );
}
