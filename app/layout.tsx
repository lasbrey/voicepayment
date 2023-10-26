import React from "react";
import { AuthContextProvider } from "@/components/config/authContext";

const Layout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
};

export default Layout;
