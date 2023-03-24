import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar/index";
import HomePage from "./Pages/Home";
import { Footer } from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import { HistoryPage } from "./Pages/dropdowninfo/History";
import { FounderPage } from "./Pages/dropdowninfo/Founder";
import { PhilosophyPage } from "./Pages/dropdowninfo/Philosophy";
import { GoalsPage } from "./Pages/dropdowninfo/Goals";
export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<HomePage />} />
          <Route caseSensitive path="/history" element={<HistoryPage />} />
          <Route caseSensitive path="/founder" element={<FounderPage />} />
          <Route
            caseSensitive
            path="/philosophy"
            element={<PhilosophyPage />}
          />
          <Route caseSensitive path="/goals" element={<GoalsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
