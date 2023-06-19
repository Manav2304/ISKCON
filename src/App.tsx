import React from "react";
import { Footer } from "./Components/Footer";
import { Media } from "./Pages/Media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
import { DonationPage } from "./Pages/Donation";
import { Contact } from "./Pages/Contact";
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
import { GovindaFood } from "./Pages/Services/GovindaFood";
import { TermsAndCondition } from "./Pages/FooterTerms/TermsAndCondition";
import { CancellationPolicy } from "./Pages/FooterTerms/CancellationPolicy";
import { PrivacyPolicy } from "./Pages/FooterTerms/PrivacyPolicy";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import ScrollToTop from "./Components/ScrollToTop";
import { Sidebar } from "./Components/Sidebar";
import { VisitUs } from "./Pages/VisitUs";
import { BlogPage } from "./Pages/Blog";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavigationBar />
        <Sidebar />
        <Routes>
          <Route caseSensitive path={routes.home} element={<HomePage />} />
          <Route caseSensitive path={routes.visitUs} element={<VisitUs />} />
          <Route
            caseSensitive
            path={routes.festival}
            element={<FestivalPage />}
          />
          <Route caseSensitive path={routes.blog} element={<BlogPage />} />
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
          <Route caseSensitive path={routes.gaushala} element={<Gaushala />} />
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
          <Route
            caseSensitive
            path={routes.govindaFood}
            element={<GovindaFood />}
          />
          <Route
            caseSensitive
            path={routes.termsAndCondition}
            element={<TermsAndCondition />}
          />
          <Route
            caseSensitive
            path={routes.cancellationPolicy}
            element={<CancellationPolicy />}
          />
          <Route
            caseSensitive
            path={routes.privacyPolicy}
            element={<PrivacyPolicy />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
