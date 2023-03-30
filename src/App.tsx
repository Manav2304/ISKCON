import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import { DonationPage } from "./Pages/Donation";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/donation" element={<DonationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
