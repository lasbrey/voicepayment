import React from "react";
import { Metadata } from "next";
import Balance from "../components/balance";
import Transaction from "../components/transactions";

export const metadata: Metadata = {
  title: "Transactions",
  description: "This is the Transactions Page",
  // other metadata
};

const Transactions = () => {
  return (
    <section className="pt-15 md:pt-25 xl:pt-30 px-15 overflow-hidden mx-auto max-w-7xl">
      <div className="grid grid-cols-3 grid-rows-1 gap-4 pt-5">
        {/* grid 1 */}
        <Balance />
        {/* grid 2  */}
        <div className="col-span-2">
          <Transaction />
        </div>
      </div>
    </section>
  );
};

export default Transactions;
