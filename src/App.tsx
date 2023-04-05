import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
import { FestivalPage } from "./Pages/Festival";
import { Contact } from "./Pages/Contact";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<HomePage />} />
          <Route caseSensitive path="/festival" element={<FestivalPage />} />
          <Route caseSensitive path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
