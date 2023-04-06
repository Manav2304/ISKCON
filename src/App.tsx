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
import DonationPage from "./Pages/Donation";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/pages/Donation" element={<DonationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
