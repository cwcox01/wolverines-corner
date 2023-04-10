import React from "react";

// importing football roster component
import FootballRoster from "../components/FootballRoster";

export default function Roster({ Roster }) {
  return (
    <>
      <div className="pt-5 pb-5 d-flex justify-content-center">
        <h2>Michigan Football Roster (2023)</h2>
      </div>
      <div className="d-flex align-items-center flex-column">
        <FootballRoster />
      </div>
    </>
  );
}
