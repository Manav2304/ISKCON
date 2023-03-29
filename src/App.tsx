import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import Media from "./Pages/Media";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/media" element={<Media />} />
        </Routes>
      </Router>
    </>
  );
};
