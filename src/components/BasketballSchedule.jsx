import React from "react";

// importing json data for basketball schedule
import schedule from "./basketball-schedule.json";

// importing smaller component
import BasketballScheduleItem from "./BasketballScheduleItem";

// setting variable to access json data
const michiganBasketballSchedule = schedule.basketball;

let michiganBasketballLoss = 0;
let michiganBasketballWin = 0;
let bigTenWin = 0;
let bigTenLoss = 0;
schedule = 0;

for (let i = 0; i < michiganBasketballSchedule.length; i++) {
  const game = michiganBasketballSchedule[i];
  if (game.Result === "W") {
    michiganBasketballWin += 1;
    if (game.BigTen === "Y") {
      bigTenWin += 1;
    }
  } else if (game.Result === "L") {
    michiganBasketballLoss += 1;
    if (game.BigTen === "Y") {
      bigTenLoss += 1;
    }
  }
}

export default function BasketballSchedule() {
  return (
    <>
      <>
        <h2 className="basketball-header">Michigan Basketball</h2>
        <h3 className="pt-3">Schedule 2022 - 2023 Season</h3>
        <p className="pt-3">
          Overall Record: {michiganBasketballWin} - {michiganBasketballLoss}
        </p>
        <p>
          Big Ten Record: {bigTenWin} - {bigTenLoss}
        </p>
      </>
      <table>
        <tr>
          <th>Date</th>
          <th>At</th>
          <th>Opp.</th>
          <th>Score</th>
          <th>Result</th>
        </tr>

        {michiganBasketballSchedule &&
          michiganBasketballSchedule.map((basketball) => (
            <BasketballScheduleItem
              basketballGameDate={basketball.Dat}
              basketballGameAt={basketball.At}
              basketballGameOpponent={basketball.Opponent}
              basketballGameScore={basketball.Score}
              basketballGameResult={basketball.Result}
            />
          ))}
      </table>
    </>
  );
}
