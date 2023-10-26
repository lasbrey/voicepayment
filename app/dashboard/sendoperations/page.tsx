"use client";
import React, { useState, useEffect } from "react";
import { UserAuth } from "@/components/config/authContext";
import Balance from "../components/balance";
import Biller from "../components/biller";

const SendOperations = () => {
  const { user } = UserAuth();
 
  useEffect(() => {
    const fetchDataAndReadAloud = async () => {
      const readTextAloud = () => {
        if (user?.displayName) {
          const welcomeMessage = `Hello ${user.displayName}! Welcome back to your finance dashboard.  Your financial status awaits you. Stay updated, stay in control. With this page, you can easily send funds to other users and friends effortlessly. Your financial transactions, simplified.`;
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
        <div className=" col-span-2">
          <Biller />
        </div>
      </div>
    </section>
  );
};

export default SendOperations;
