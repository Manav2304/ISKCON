import React from "react";
import Media from "./Pages/Media";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import FestivalPage from "./Pages/Festival";
import { Contact } from "./Pages/Contact";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Media />
      <Router>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/festival" element={<FestivalPage />} />
          <Route caseSensitive path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
