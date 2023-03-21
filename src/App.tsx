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
import { Historypage } from "./Pages/dropdowninfo";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<Historypage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
