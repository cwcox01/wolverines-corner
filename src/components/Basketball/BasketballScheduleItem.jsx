import React from "react";

export default function BasketballScheduleItem({
  basketballGameDate,
  basketballGameAt,
  basketballGameOpponent,
  basketballGameScore,
  basketballGameResult,
}) {
  return (
    <tr>
      <td>{basketballGameDate}</td>
      <td>{basketballGameAt}</td>
      <td>{basketballGameOpponent}</td>
      <td>{basketballGameScore}</td>
      <td>{basketballGameResult}</td>
    </tr>
  );
}
