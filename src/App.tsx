import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import AboutUs from "./Pages/About";
import Home from "./Pages/Home";
import { Contact } from "./Pages/Contact";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/Home" element={<MyCarousel />} />
          <Route path="/Pages/About" element={<AboutUs />} />
          <Route path="/pages/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
