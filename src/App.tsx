import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import VisitUs from "./Pages/VisitUs";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/visit-us" element={<VisitUs />} />
        </Routes>
      </Router>
    </>
  );
};
