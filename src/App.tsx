import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import FestivalPage from "./Pages/Festival";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Festival" element={<FestivalPage />} />
        </Routes>
      </Router>
    </>
  );
};
