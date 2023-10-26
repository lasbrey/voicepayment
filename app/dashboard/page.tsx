import React, { useState, useEffect } from "react";
import { Metadata } from "next";
import Quicklinks from "./components/quicklinks";
import Balance from "./components/balance";
import Biller from "./components/biller";
import Transactions from "./components/transactions";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Dashboard page for Solid",
  // other metadata
};

const Dashboard = () => {
  return (
    <section className="pt-15 md:pt-25 xl:pt-30 px-15 overflow-hidden mx-auto max-w-7xl">
      <div className="grid grid-cols-3 grid-rows-1 gap-4 pt-5">
        {/* grid 1 */}
        <Balance />
        {/* grid 2  */}
        <div className=" col-span-2">
          <Quicklinks />
          <div className="grid grid-cols-2 grid-rows-1 gap-2 pt-5">
              <Biller />
              <Transactions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
