import React from "react";

// importing components to be used from components folder
import BasketballSchedulePage from "../components/BasketballSchedule";

export default function BasketballSchedule() {
  return (
    <div className="basketball-section pt-5 pb-5 d-flex align-items-center flex-column">
      <BasketballSchedulePage />
    </div>
  );
}
