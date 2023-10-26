import React from "react";
import "../globals.css";
import Sidebar from "./components/sidebar"
import Speech from "./components/speech"

const DashboardLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body className="bg-[#f6f6f6]">
        
        <Sidebar />

        {children}
        <Speech/>
      </body>
    </html>
  );
};

export default DashboardLayout;
