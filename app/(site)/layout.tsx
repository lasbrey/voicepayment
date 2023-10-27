"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";
import Speech from "@/app/dashboard/components/speech";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body className={`dark:bg-black`}>
        <div>
          <Lines />
          <Header />
          {children}
          <Speech />
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
