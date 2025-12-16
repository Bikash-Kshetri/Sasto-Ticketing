import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Home from "./Page/home";
import About from "./Page/about";
import Companyprofile from "./Page/companyprofile";
import Contact from "./Page/contact";
import Plane from "./Page/plane";
import Booknow from "./Page/booknow";
import LoginPage from "./Page/login";
import BrowsePlaneTicketSection from "./component/browseplanetickets";
import PartnerLogos from "./component/partners";
import TravelPackages from "./Page/travelpackages";
import BaliTourDetails from "./Page/baliTourDetails";
import BestSellingPackages from "./component/bestsellingpackages";
import SearchPage from "./Page/search";
import AgentLogin from "./Page/agentLogin";
import Dashboard from "./Page/Dashboard";
import SudipFlights from "./Page/Flights/sudipflights";
import PrajolFlights from "./Page/Flights/prajwolflights";
import SignUpPage from "./Page/signup";
import ThemeSwitch from "./Page/themeswitch";
import KeyPersons from "./Page/keyperson";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/companyprofile" element={<Companyprofile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/planes" element={<Plane />} />
        <Route path="/booknow/:id?" element={<Booknow />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/browseticket" element={<BrowsePlaneTicketSection />} />
        <Route path="/travelpackage" element={<TravelPackages />} />
        <Route path="/bestsellingpackages" element={<BestSellingPackages />} />
        <Route path="/bali-tour-details" element={<BaliTourDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/agent-login" element={<AgentLogin />} />
         <Route path="/" element={<AgentLogin />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/flights/sudip" element={<SudipFlights />} />
         <Route path="/flights/prajol" element={<PrajolFlights />} />
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="/themeswitch" element={<ThemeSwitch />} />
         <Route path="/keyperson" element={<KeyPersons />} />

      </Routes>
      <PartnerLogos />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
