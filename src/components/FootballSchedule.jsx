import React from "react";

// importing json file for schedule data
import schedule from "./football-schedule.json";

// importing smaller component
import FootballScheduleItem from "./FootballScheduleItem";

// const variable for accessing football schedule data
const michiganFootballSchedule = schedule.football;

let michiganFootballLoss = 0;
let michiganFootballWin = 0;
let bigTenWin = 0;
let bigTenLoss = 0;
schedule = 0;

for (let i = 0; i < michiganFootballSchedule.length; i++) {
  const game = michiganFootballSchedule[i];
  if (game.Result === "W") {
    michiganFootballWin += 1;
    if (game.BigTen === "Y") {
      bigTenWin += 1;
    }
  } else if (game.Result === "L") {
    michiganFootballLoss += 1;
    if (game.BigTen === "Y") {
      bigTenLoss += 1;
    }
  }
}

export default function FootballSchedule() {
  return (
    <>
      <>
        {" "}
        <h2 className="football-header">Michigan Football</h2>
        <h3 className="pt-3">Schedule 2023 Season</h3>
        <p className="pt-2">
          Overall Record: {michiganFootballWin} - {michiganFootballLoss}
        </p>
        <p>
          Big Ten Record: {bigTenWin} - {bigTenLoss}
        </p>
      </>
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>At</th>
          <th>Opp.</th>
          <th>Score</th>
          <th>Result</th>
        </tr>

        {michiganFootballSchedule &&
          michiganFootballSchedule.map((football) => (
            <FootballScheduleItem
              footballGameDate={football.Date}
              footballGameTime={football.Time}
              footballGameAt={football.At}
              footballGameOpponent={football.Opponent}
              footballGameScore={football.Score}
              footballGameResult={football.Result}
            />
          ))}
      </table>
    </>
  );
}
