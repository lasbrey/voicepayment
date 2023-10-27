import React from "react";
import { AuthContextProvider } from "@/components/config/authContext";
import "regenerator-runtime/runtime";

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
