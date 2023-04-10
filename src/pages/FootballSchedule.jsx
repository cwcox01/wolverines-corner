import React from "react";

// importing components to use on football schedule routed page
import FootballSchedulePage from "../components/FootballSchedule";
import FootballContent from "../components/FootballContent";

export default function FootballSchedle() {
  return (
    <div className="football-section pt-5 pb-5 d-flex align-items-center flex-column">
      <FootballContent />
      <FootballSchedulePage />
    </div>
  );
}
