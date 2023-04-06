import React from "react";
import { Media } from "./Pages/Media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
import { DonationPage } from "./Pages/Donation";
import { Contact } from "./Pages/Contact";
import { VisitUs } from "./Pages/VisitUs";
import { routes } from "./routes";
import { FestivalPage } from "./Pages/Festival";
import { BookDistribution } from "./Pages/Services/BookDistribution";
import { DeityWorship } from "./Pages/Services/DeityWorship";
import { DevoteeKitchen } from "./Pages/Services/DevoteeKitchen";
import { Gaushala } from "./Pages/Services/Gaushala";
import { GuestHouse } from "./Pages/Services/GuestHouse";
import { IskconYouthForum } from "./Pages/Services/IskconYouthForum";
import { KirtanAtIskcon } from "./Pages/Services/KirtanAtIskcon";
import { LifeTimeMembership } from "./Pages/Services/LifeTimeMembership";

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
          <Route caseSensitive path={routes.visitUs} element={<VisitUs />} />
          <Route caseSensitive path={routes.media} element={<Media />} />
          <Route caseSensitive path={routes.contact} element={<Contact />} />
          <Route
            caseSensitive
            path={routes.donation}
            element={<DonationPage />}
          />
          <Route
            caseSensitive
            path={routes.bookDistribution}
            element={<BookDistribution />}
          />
          <Route
            caseSensitive
            path={routes.deityWorship}
            element={<DeityWorship />}
          />
          <Route
            caseSensitive
            path={routes.devoteeKitchen}
            element={<DevoteeKitchen />}
          />
          <Route caseSensitive path={routes.goushala} element={<Gaushala />} />
          <Route
            caseSensitive
            path={routes.guestHouse}
            element={<GuestHouse />}
          />
          <Route
            caseSensitive
            path={routes.iskconYouthForum}
            element={<IskconYouthForum />}
          />
          <Route
            caseSensitive
            path={routes.kirtanAtIskcon}
            element={<KirtanAtIskcon />}
          />
          <Route
            caseSensitive
            path={routes.lifeTimeMembership}
            element={<LifeTimeMembership />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
