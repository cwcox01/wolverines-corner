import React from "react";
import { Routes, Route } from "react-router-dom";

// importing website components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import FootballRosterRoute from "../pages/FootballRoster";
import Home from "../pages/Home";
import FootballSchedle from "../pages/FootballSchedule";
import BasketballRosterPage from "../pages/BasketballRoster";
import BasketballSchedule from "../pages/BasketballSchedule";

export default function App() {
  return (
    <div className="site-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact="false" />
        <Route
          path="footballroster"
          element={<FootballRosterRoute />}
          exact="false"
        />
        <Route
          path="footballschedule"
          element={<FootballSchedle />}
          exact="false"
        />
        <Route
          path="basketballroster"
          element={<BasketballRosterPage />}
          exact="false"
        />
        <Route
          path="basketballschedule"
          element={<BasketballSchedule />}
          exact="false"
        />
      </Routes>
      <Footer />
    </div>
  );
}
