import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import { DonationPage } from "./Pages/Donation";
import { FestivalPage } from "./Pages/Festival";
import { Contact } from "./Pages/Contact";
import { routes } from "./routes";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path={routes.home} element={<Home />} />
          <Route
            caseSensitive
            path={routes.festival}
            element={<FestivalPage />}
          />
          <Route caseSensitive path={routes.contact} element={<Contact />} />
          <Route
            caseSensitive
            path={routes.donation}
            element={<DonationPage />}
          />
        </Routes>
      </Router>
    </>
  );
};
