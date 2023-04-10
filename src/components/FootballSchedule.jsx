import React from "react";

// importing json file for schedule data
import schedule from "./football-schedule.json";

// importing smaller component
import FootballScheduleItem from "./FootballScheduleItem";

// const variable for accessing football schedule data
const michiganFootballSchedule = schedule.football;

export default function FootballSchedule() {
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>At</th>
        <th>Opp.</th>
        <th>Score</th>
        <th>Result</th>
      </tr>

      {michiganFootballSchedule.map((football, index) => (
        <FootballScheduleItem
          key={index}
          footballGameDate={football.Date}
          footballGameTime={football.Time}
          footballGameAt={football.At}
          footballGameOpponent={football.Opponent}
          footballGameScore={football.Score}
          footballGameResult={football.Result}
        />
      ))}
    </table>
  );
}
