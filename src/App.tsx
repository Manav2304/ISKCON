import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Contact } from "./Pages/Contact";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
