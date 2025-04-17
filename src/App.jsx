import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Contact from "./components/Contact";
import Adoption from "./components/AdoptionResources";
import AvailableChildren from "./components/AvailableChildren";
import ChildDetails from "./components/ChildDetails";
import Gallery from "./GalleryPages/Gallery";
import AdoptNow from "./components/AdoptNow";
import Home from "./components/Home";
import Donates from "./components/Donates";
import Login from "./login-register/Login"; 
import Register from "./login-register/Register"; 
import Parents from "./ParentsPages/AdoptionStoryPage"; 
import LiveChat from "./chat/LiveChat";
import UserProfile from "./userProfile/UserProfile";
import EventRegister from "./HomePages/event_register";
import ForgotPassword from "./login-register/ForgotPassword";
import Guide_to_adoption from "./ParentsPages/Guide_to_adoption";
import ParentsTips  from "./ParentsPages/ParentsTips";
import SupportGroups from "./ParentsPages/SupportGroups";
import LegalResources from "./ParentsPages/LegaleResources";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserLayout>
              <About />
            </UserLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />
        <Route
          path="/adoption-resources"
          element={
            <UserLayout>
              <Adoption />
            </UserLayout>
          }
        />
        <Route
          path="/available-children"
          element={
            <UserLayout>
              <AvailableChildren />
            </UserLayout>
          }
        />
        <Route
          path="/child/:id"
          element={
            <UserLayout>
              <ChildDetails />
            </UserLayout>
          }
        />
        <Route
          path="/adopt-now/:id"
          element={
            <UserLayout>
              <AdoptNow />
            </UserLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <UserLayout>
              <Gallery />
            </UserLayout>
          }
        />
        <Route
          path="/login"
          element={
            <UserLayout>
              <Login />
            </UserLayout>
          }
        />
        {/*ye niyazuddin add kiya hai*/}
        <Route
          path="/register"
          element={
            <UserLayout>
              <Register />
            </UserLayout>
          }
        />{" "}
        <Route
          path="/forgot-password"
          element={
            <UserLayout>
              <ForgotPassword/>
            </UserLayout>
          }
        />
        {/*ye niyazuddin add kiya hai*/}
        <Route
          path="/adoption-stories"
          element={
            <UserLayout>
              <Parents />
            </UserLayout>
          }
        />
<Route
          path="/guide-adopt"
          element={
            <UserLayout>
              <Guide_to_adoption />
            </UserLayout>
          }
        />
        <Route
          path="/parenting-tips"
          element={
            <UserLayout>
              <ParentsTips />
            </UserLayout>
          }
        />
        <Route
          path="/support-group"
          element={
            <UserLayout>
              <SupportGroups />
            </UserLayout>
          }
/>
<Route
          path="/legal-reasource"
          element={
            <UserLayout>
              <LegalResources />
            </UserLayout>
          }
/>
        <Route
          path="/donates"
          element={
            <UserLayout>
              <Donates />
            </UserLayout>
          }
        />
        <Route
          path="/live-chat"
          element={
            <UserLayout>
              <LiveChat />
            </UserLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <UserLayout>
              <UserProfile />
            </UserLayout>
          }
        />
        <Route
          path="/eventregister"
          element={
            <UserLayout>
              <EventRegister />
            </UserLayout>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
