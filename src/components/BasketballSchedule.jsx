import React from "react";

// importing json data for basketball schedule
import schedule from "./basketball-schedule.json";

// importing smaller component
import BasketballScheduleItem from "./BasketballScheduleItem";

// setting variable to access json data
const michiganBasketballSchedule = schedule.basketball;

export default function BasketballSchedule() {
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>At</th>
        <th>Opp.</th>
        <th>Score</th>
        <th>Result</th>
      </tr>

      {michiganBasketballSchedule.map((basketball, index) => (
        <BasketballScheduleItem
          basketballGameDate={basketball.Dat}
          basketballGameAt={basketball.At}
          basketballGameOpponent={basketball.Opponent}
          basketballGameScore={basketball.Score}
          basketballGameResult={basketball.Result}
        />
      ))}
    </table>
  );
}
