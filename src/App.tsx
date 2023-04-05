import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
import { FestivalPage } from "./Pages/Festival";
import { Contact } from "./Pages/Contact";
import { routes } from "./routes";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path={routes.home} element={<HomePage />} />
          <Route
            caseSensitive
            path={routes.festival}
            element={<FestivalPage />}
          />
          <Route caseSensitive path={routes.contact} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
