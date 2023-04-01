import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import FestivalPage from "./Pages/Festival";
import { Contact } from "./Pages/Contact";
import VisitUs from "./Pages/VisitUs";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/festival" element={<FestivalPage />} />
          <Route caseSensitive path="/contact" element={<Contact />} />
          <Route caseSensitive path="/visit-us" element={<VisitUs />} />
        </Routes>
      </Router>
    </>
  );
};
