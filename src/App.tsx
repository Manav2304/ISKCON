import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import { LifeTimeMembership } from "./Pages/Servicespage/Life-Time-Membership";
import { IskconYouthForum } from "./Pages/Servicespage/Iskcon-Youth-Forum";
import { GuestHouse } from "./Pages/Servicespage/Guest-House";
import { Gaushala } from "./Pages/Servicespage/Gaushala";
import { DeityWorship } from "./Pages/Servicespage/Deity-Worship";
import { DevoteeKitchen } from "./Pages/Servicespage/Devotee-Kitchen";
import { KirtanAtIskcon } from "./Pages/Servicespage/Kirtan-At-Iskcon";
import { Book } from "./Pages/Servicespage/Book-Distribution";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route
            path="/Pages/Servicespage/LifeTimeMembership"
            element={<LifeTimeMembership />}
          />
          <Route
            path="/Pages/Servicespage/IskconYouthForum"
            element={<IskconYouthForum />}
          />
          <Route
            path="/Pages/Servicespage/GuestHouse"
            element={<GuestHouse />}
          />
          <Route path="/Pages/Servicespage/Gaushala" element={<Gaushala />} />
          <Route
            path="/Pages/Servicespage/DeityWorship"
            element={<DeityWorship />}
          />
          <Route
            path="/Pages/Servicespage/DevoteeKitchen"
            element={<DevoteeKitchen />}
          />
          <Route
            path="/Pages/Servicespage/KirtanAtIskcon"
            element={<KirtanAtIskcon />}
          />
          <Route
            path="/Pages/Servicespage/Book-Distribution"
            element={<Book />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
