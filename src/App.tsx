import React from "react";
import { Footer } from "./Components/Footer";
import { Media } from "./Pages/Media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
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
import { AnnaDaan } from "./Pages/DonationPages/AnnaDaan";
import { GauSeva } from "./Pages/DonationPages/GauSeva";
// import { DonationMainPage } from "./Pages/DonationPages/DonationMainPage";
import { JanmashtmiSeva } from "./Pages/DonationPages/JanmashtamiSeva";
import { RadharaniKitchenSeva } from "./Pages/DonationPages/Radharani'sKitchenSeva";
import { SadhuBhojan } from "./Pages/DonationPages/SadhuBhojan";
import { RecurriumDonation } from "./Pages/DonationPages/RecurriumDonation";
import { GiveShrimadBhagavatam } from "./Pages/DonationPages/GiveSrimadBhagavatam";
import { VidyaDaan } from "./Pages/DonationPages/VidyaDaan";
import { EHindu } from "./Pages/DonationPages/E-hundi";
import { GeneralDonation } from "./Pages/DonationPages/GenralDonation";
import { MonthlySeva } from "./Pages/DonationPages/MonthlyRadharaniKithcenSeva";
import { GitaDaan } from "./Pages/DonationPages/GitaDaan";
import { DeitySeva } from "./Pages/DonationPages/DeitySeva";

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
          <Route caseSensitive path={routes.media} element={<Media />} />
          <Route caseSensitive path={routes.contact} element={<Contact />} />
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
          <Route caseSensitive path={routes.annaDaan} element={<AnnaDaan />} />
          <Route
            caseSensitive
            path={routes.recurriumdonation}
            element={<RecurriumDonation />}
          />
          <Route
            caseSensitive
            path={routes.givesrimadbhagavatam}
            element={<GiveShrimadBhagavatam />}
          />
          <Route
            caseSensitive
            path={routes.vidyadaan}
            element={<VidyaDaan />}
          />
          <Route caseSensitive path={routes.ehindu} element={<EHindu />} />
          <Route
            caseSensitive
            path={routes.generaldonation}
            element={<GeneralDonation />}
          />
          <Route
            caseSensitive
            path={routes.monthlySeva}
            element={<MonthlySeva />}
          />
          <Route caseSensitive path={routes.gauSeva} element={<GauSeva />} />

          {/* <Route
            caseSensitive
            path={routes.donationMainPage}
            element={<DonationMainPage />}
          /> */}

          <Route
            caseSensitive
            path={routes.janmashtmiSeva}
            element={<JanmashtmiSeva />}
          />
          <Route
            caseSensitive
            path={routes.sadhubhojan}
            element={<SadhuBhojan />}
          />
          <Route
            caseSensitive
            path={routes.radharaniKitchenSeva}
            element={<RadharaniKitchenSeva />}
          />
          <Route caseSensitive path={routes.gitaDaan} element={<GitaDaan />} />

          <Route
            caseSensitive
            path={routes.deityseva}
            element={<DeitySeva />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
