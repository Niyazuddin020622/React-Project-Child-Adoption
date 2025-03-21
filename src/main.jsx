import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import "./index.css";
import App from './App.jsx'; // Adjust the path based on your file structure
import Admin from './Admin.jsx'

import { AuthProvider } from "./context/AuthContext";
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
    <Admin/>
  </AuthProvider>
);
