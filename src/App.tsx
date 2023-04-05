import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import Home from "./Pages/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import { FestivalPage } from "./Pages/Festival";
import { Contact } from "./Pages/Contact";
import VisitUs from "./Pages/VisitUs";
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
          <Route caseSensitive path={routes.visitUs} element={<VisitUs />} />
          <Route caseSensitive path={routes.contact} element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
