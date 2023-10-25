import React from "react";
import { Metadata } from "next";
import Balance from "../components/balance";
import Biller from "../components/biller";

const SendOperations = () => {
  return (
    <section className="pt-15 md:pt-25 xl:pt-30 px-15 overflow-hidden mx-auto max-w-7xl">
      <div className="grid grid-cols-3 grid-rows-1 gap-4 pt-5">
        {/* grid 1 */}
        <Balance />
        {/* grid 2  */}
        <div className=" col-span-2">
         <Biller/>
        </div>
      </div>
    </section>
  );
};

export default SendOperations;
