import React, { useEffect, useState } from "react";
import { Footer } from "./Components/Footer";
import { Media } from "./Pages/Media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
import { DonationPage } from "./Pages/Donation";
import { Contact } from "./Pages/Contact";
import { VisitUs } from "./Pages/Visitus";
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
import { TermsAndCondition } from "./Pages/FooterTerms/TermsAndCondition";
import { CancellationPolicy } from "./Pages/FooterTerms/CancellationPolicy";
import { PrivacyPolicy } from "./Pages/FooterTerms/PrivacyPolicy";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import { Sidebar } from "./Components/Sidebar";

export const App: React.FunctionComponent = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  // Set isDesktop state based on window size
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 992);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <BrowserRouter>
        {isDesktop ? (
          <NavigationBar />
        ) : (
          <div className="row">
            <div className="col-12">
              <Sidebar />
            </div>
          </div>
        )}
        <div className="container-fluid mx-auto">
          <div className="row">
            {isDesktop && (
              <div className="col-lg-1 col-md-4 d-none d-md-block">
                <Sidebar />
              </div>
            )}
            <div className={isDesktop ? "col-lg-9 col-md-8" : "col-12"}>
              <Routes>
                <Route
                  caseSensitive
                  path={routes.home}
                  element={<HomePage />}
                />
                <Route
                  caseSensitive
                  path={routes.festival}
                  element={<FestivalPage />}
                />
                <Route
                  caseSensitive
                  path={routes.visitUs}
                  element={<VisitUs />}
                />
                <Route caseSensitive path={routes.media} element={<Media />} />
                <Route
                  caseSensitive
                  path={routes.contact}
                  element={<Contact />}
                />
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
                <Route
                  caseSensitive
                  path={routes.goushala}
                  element={<Gaushala />}
                />
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
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};
