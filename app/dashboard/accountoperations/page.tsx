"use client";
import React, { useState, useEffect } from "react";
import { Metadata } from "next";
import { UserAuth } from "@/components/config/authContext";
import Balance from "../components/balance";
import Deposit from "../components/deposit";
import Withdraw from "../components/withdraw";

const DepositAndWithdraw = () => {
  const { user } = UserAuth();

  useEffect(() => {
    const fetchDataAndReadAloud = async () => {
      const readTextAloud = () => {
        if (user?.displayName) {
          const welcomeMessage = `Hello ${user.displayName}! Welcome back to your finance dashboard. 
          Your financial status awaits you. Stay updated, stay in control. 
          You can easily manage your funds by making deposits and withdrawals right from this page.`;
          const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(welcomeMessage);
          synth.speak(utterance);
        }
      };

      // Call the function to read text aloud only when route is "/dashboard"
      readTextAloud();
    };

    fetchDataAndReadAloud();
  }, [user]);

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
