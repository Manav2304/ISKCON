import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import { Footer } from "./Components/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import { Historypage } from "./Pages/dropdowninfo/History";
import { Founderpage } from "./Pages/dropdowninfo/Founder";
import { Philosophypage } from "./Pages/dropdowninfo/Philosophy";
import { Goalspage } from "./Pages/dropdowninfo/Goals";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<HomePage />} />
          <Route path="/history" element={<Historypage />} />
          <Route path="/Founder" element={<Founderpage />} />
          <Route path="/Philosophy" element={<Philosophypage />} />
          <Route path="/Goals" element={<Goalspage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
