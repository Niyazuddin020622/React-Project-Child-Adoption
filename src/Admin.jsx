import React from "react";
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ScrollToTop from "./components/ScrollToTop";

//backend
// import Admin from "../src/admin/AdoptionResource";
import AdminDashboard from "./admin/pages/AdminDashboard";
import ManageUsers from "./admin/admin-manages/ManageUsers";
import ManageResources from "./admin/admin-manages/ManageResources";
import EditResource from './admin/pages/EditResource';
import AdoptionResource from './admin/pages/AdoptionResource'
import ViewReports from "./admin/pages/ViewReports";
import ManageChildren from "./admin/admin-manages/ManageChildren";
import ManageDonations from "./admin/admin-manages/ManageDonations";
import AdminRegister from "./admin/authentication/AdminRegister";
import AdminLogin from "./admin/authentication/AdminLogin";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
     
      <Routes>
        
        {/*ye niyazuddin add kiya hai*/}
        <Route
          path="/admin-dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        {/* add admin page tarmpory */}
        <Route
          path="/manage-users"
          element={
            <AdminLayout>
              <ManageUsers />
            </AdminLayout>
          }
        />
        <Route
          path="/manage-resources"
          element={
            <AdminLayout>
              <ManageResources />
            </AdminLayout>
          }
        />
          <Route path="/resources" element={<AdoptionResource />} />
         <Route path="/edit-resource/:id" element={<AdminLayout><EditResource /></AdminLayout>} />
         <Route path="/view-reports" element={<AdminLayout><ViewReports /></AdminLayout>} />
         <Route path="/manage-children" element={<AdminLayout><ManageChildren /></AdminLayout>} />
         <Route path="/manage-donations" element={<AdminLayout><ManageDonations /></AdminLayout>} />
         <Route path="/admin-register" element={<AdminRegister />} />
         <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;