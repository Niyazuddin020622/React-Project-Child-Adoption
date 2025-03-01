import React from "react";
import AdminNavbar from "../admin/admin-components/AdminNavbar";  // Admin Navbar
// import Footer from "../components/Footer";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
};

export default AdminLayout;
