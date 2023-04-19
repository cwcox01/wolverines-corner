import React from "react";

import FootballSchedle from "./FootballSchedule";

export default function Football() {
  return (
    <div
      className="football-section pt-5 d-flex align-items-center flex-column"
      id="football"
    >
      <FootballSchedle />
    </div>
  );
}
