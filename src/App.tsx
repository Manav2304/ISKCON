import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { HistoryPage } from "./Pages/History";
import { FounderPage } from "./Pages/Founder";
import { PhilosophyPage } from "./Pages/Philosophy";
import { GoalsPage } from "./Pages/Goals";
import FestivalPage from "./Pages/Festival";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route caseSensitive path="/" element={<HomePage />} />
          <Route caseSensitive path="/festival" element={<FestivalPage />} />
          <Route caseSensitive path="/history" element={<HistoryPage />} />
          <Route caseSensitive path="/founder" element={<FounderPage />} />
          <Route
            caseSensitive
            path="/philosophy"
            element={<PhilosophyPage />}
          />
          <Route caseSensitive path="/goals" element={<GoalsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
