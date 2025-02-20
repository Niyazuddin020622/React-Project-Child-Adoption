import React from "react";
import Navbar from "../components/Navbar";  // User Navbar
import Footer from "../components/Footer";  // User Footer

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
