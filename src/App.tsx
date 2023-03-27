import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import Home from "./Pages/Home";
import Media from "./Pages/Media";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<MyCarousel />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Router>
    </>
  );
};
