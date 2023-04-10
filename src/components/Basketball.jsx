import React from "react";

// importing smaller basketball components
// import BasketballContent from "./BasketballContent";
import BasketballSchedule from "./BasketballSchedule";

export default function Basketball() {
  return (
    <div
      className="basketball-section pt-5 pb-5 d-flex align-items-center flex-column"
      id="basketball"
    >
      <BasketballSchedule />
    </div>
  );
}
