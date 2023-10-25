import React from "react";
import { Metadata } from "next";
import Balance from "../components/balance";
import Deposit from "../components/deposit";
import Withdraw from "../components/withdraw";

const DepositAndWithdraw = () => {
  return (
    <section className="pt-15 md:pt-25 xl:pt-30 px-15 overflow-hidden mx-auto max-w-7xl">
      <div className="grid grid-cols-3 grid-rows-1 gap-4 pt-5">
        {/* grid 1 */}
        <Balance />
        {/* grid 2  */}
        <div className="col-span-2">
            <Deposit />
            <Withdraw />
        </div>
      </div>
    </section>
  );
};

export default DepositAndWithdraw;
