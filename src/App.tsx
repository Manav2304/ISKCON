import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Media from "./Pages/Media";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route caseSensitive path="/media" element={<Media />} />
        </Routes>
      </Router>
    </>
  );
};
