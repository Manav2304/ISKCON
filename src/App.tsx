import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import FestivalPage from "./Pages/Festival";
import { Footer } from "./Components/Footer";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/festival" element={<FestivalPage />} />
        </Routes>
      </Router>
    </>
  );
};
