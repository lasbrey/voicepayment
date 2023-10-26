"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { UserAuth } from "@/components/config/authContext";
import { db } from "@/components/config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Balance = () => {
  const { user } = UserAuth();
  const pathname = usePathname();
  const [userBalance, setUserBalance] = useState(null);
  const [userMoneyIn, setUserMoneyIn] = useState(null);
  const [userMoneyOut, setUserMoneyOut] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let fetchedData = {
        userBalance: null,
        userMoneyIn: null,
        userMoneyOut: null,
      };

      if (user) {
        const balanceQuery = query(
          collection(db, "balance"),
          where("userId", "==", user?.uid)
        );
        const moneyInQuery = query(
          collection(db, "moneyIn"),
          where("userId", "==", user?.uid)
        );
        const moneyOutQuery = query(
          collection(db, "moneyOut"),
          where("userId", "==", user?.uid)
        );

        try {
          const balanceSnapshot = await getDocs(balanceQuery);
          balanceSnapshot.forEach((doc) => {
            fetchedData.userBalance = doc.data().balance;
          });

          const moneyInSnapshot = await getDocs(moneyInQuery);
          moneyInSnapshot.forEach((doc) => {
            fetchedData.userMoneyIn = doc.data().amount;
          });

          const moneyOutSnapshot = await getDocs(moneyOutQuery);
          moneyOutSnapshot.forEach((doc) => {
            fetchedData.userMoneyOut = doc.data().amount;
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      return fetchedData;
    };

    const fetchDataAndReadAloud = async () => {
      const fetchedData = await fetchData();
      setUserBalance(fetchedData.userBalance);
      setUserMoneyIn(fetchedData.userMoneyIn);
      setUserMoneyOut(fetchedData.userMoneyOut);

      const readTextAloud = () => {
        if (user?.displayName) {
          const welcomeMessage = `Welcome back ${user?.displayName}. Your current balance is ₦${fetchedData.userBalance} naira. You have received ₦${fetchedData.userMoneyIn} naira and spent ₦${fetchedData.userMoneyOut} naira.`;
          const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(welcomeMessage);
          synth.speak(utterance);
        }
      };

      // Call the function to read text aloud only when route is "/dashboard"
      if (pathname === "/dashboard") {
        readTextAloud();
      }
    };

    fetchDataAndReadAloud();
  }, [user]);
  return (
    <div className="">
      <div>
        <h3>Welcome Back {user?.displayName} </h3>
      </div>

      <div className="max-w-sm p-6 bg-white border border-stroke rounded-lg">
        <a href="#">
          <h5 className="mb-2 font-semibold tracking-tight text-black dark:text-white">
            Solid Account Balance
          </h5>
        </a>
        <p className="mb-3 text-2xl font-extralight ">₦{userBalance}</p>
        <a href="#" className="inline-flex items-center">
          Available
        </a>
      </div>
      <div className="max-w-sm p-6 mt-4 bg-white border border-stroke rounded-lg">
        <a href="#">
          <h5 className="mb-2 font-semibold tracking-tight text-black dark:text-white">
            Money in
          </h5>
        </a>
        <p className="mb-3 text-2xl font-extralight ">₦{userMoneyIn}</p>
        <a href="#" className="inline-flex items-center">
          Total Deposited/Recieved
        </a>
      </div>
      <div className="max-w-sm p-6 mt-4 bg-white border border-stroke rounded-lg">
        <a href="#">
          <h5 className="mb-2 font-semibold tracking-tight text-black dark:text-white">
            Money out
          </h5>
        </a>
        <p className="mb-3 text-2xl font-extralight ">₦{userMoneyOut}</p>
        <a href="#" className="inline-flex items-center">
          Total sent or spent
        </a>
      </div>
    </div>
  );
};

export default Balance;
