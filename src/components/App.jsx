import React from "react";
import { Routes, Route } from "react-router-dom";

// importing website components
import Navbar from "./Navbar";
import Footer from "./Footer";
import Roster from "../pages/FootballRoster";
import Home from "../pages/Home";
import FootballSchedle from "../pages/FootballSchedule";
import FutureFootballSchedule from "../pages/FutureFootballSchedule";
import BasketballRoster from "../pages/BasketballRoster";
import BasketballFutureSchedule from "../pages/BasketballFutureSchedule";
import BasketballSchedule from "../pages/BasketballSchedule";

export default function App() {
  return (
    <div className="site-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact="false" />
        <Route path="roster" element={<Roster />} exact="false" />
        <Route
          path="footballschedule"
          element={<FootballSchedle />}
          exact="false"
        />
        <Route
          path="futurefootballschedule"
          element={<FutureFootballSchedule />}
          exact="false"
        />
        <Route
          path="basketballroster"
          element={<BasketballRoster />}
          exact="false"
        />
        <Route
          path="basketballschedule"
          element={<BasketballSchedule />}
          exact="false"
        />
        <Route
          path="basketballfutureschedule"
          element={<BasketballFutureSchedule />}
          exact="false"
        />
      </Routes>
      <Footer />
    </div>
  );
}
