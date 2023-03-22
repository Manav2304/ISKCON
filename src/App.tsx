import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import Home from "./Pages/Home";
import Visitus from "./Pages/Visitus";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/Home" element={<MyCarousel />} />
          <Route path="/Pages/Visitus"element={<Visitus />} />
        </Routes>
      </Router>
    </>
  );
};
