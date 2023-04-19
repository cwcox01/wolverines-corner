import React from "react";

// importing basketball roster component
import BasketballRoster from "../components/Basketball/BasketballRoster";

export default function BasketballRosterPage() {
  return (
    <>
      <div className="pt-5 pb-5 d-flex justify-content-center">
        <h2>Michigan Basketball Roster (2023 - 2023)</h2>
      </div>
      <div className="d-flex align-items-center flex-column">
        <BasketballRoster />
      </div>
    </>
  );
}
