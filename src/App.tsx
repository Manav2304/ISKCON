import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VisitUs from "./Pages/VisitUs";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route caseSensitive path="/visit-us" element={<VisitUs />} />
        </Routes>
      </Router>
    </>
  );
};
