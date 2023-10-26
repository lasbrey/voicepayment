"use client";
import React, { useState, useEffect } from "react";
import { UserAuth } from "@/components/config/authContext";
import { db } from "@/components/config/firebase";
import { collection, addDoc, updateDoc, getDocs } from "firebase/firestore";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Deposit = () => {
  const { updateRecieve, user } = UserAuth();
  const [amount, setAmount] = useState("");

  const handleDeposit = async (e) => {
    e.preventDefault();

    // Convert amount to a number (assuming it's a string)
    const depositedAmount = parseFloat(amount);

    try {
      // Check if a document with the user's ID exists in 'moneyIn' collection
      const moneyInSnapshot = await getDocs(collection(db, "moneyIn"));
      let moneyInDocumentExists = false;
      moneyInSnapshot.forEach((doc) => {
        if (doc.data().userId === user?.uid) {
          moneyInDocumentExists = true;
          const existingAmount = doc.data().amount;
          // Update the existing document with the new deposited amount in 'moneyIn' collection
          updateDoc(doc.ref, {
            amount: existingAmount + depositedAmount,
          });
        }
      });

      // If document with user's ID doesn't exist, create a new document in 'moneyIn' collection
      if (!moneyInDocumentExists) {
        await addDoc(collection(db, "moneyIn"), {
          userId: user?.uid,
          amount: depositedAmount,
        });
      }

      // Check if a document with the user's ID exists in 'balance' collection
      const balanceSnapshot = await getDocs(collection(db, "balance"));
      let balanceDocumentExists = false;
      balanceSnapshot.forEach((doc) => {
        if (doc.data().userId === user?.uid) {
          balanceDocumentExists = true;
          const existingBalance = doc.data().balance;
          // Update the existing document with the new deposited amount in 'balance' collection
          updateDoc(doc.ref, {
            balance: existingBalance + depositedAmount,
          });
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm Payment",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Success!", "Payment Successfull.", "success");
            }
          });
        }
      });

      // If document with user's ID doesn't exist, create a new document in 'balance' collection
      if (!balanceDocumentExists) {
        await addDoc(collection(db, "balance"), {
          userId: user?.uid,
          balance: depositedAmount,
        });
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirm Payment",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Success!", "Payment Successfull.", "success");
          }
        });
      }
    } catch (error) {
      console.error("Error handling deposit:", error);
    }
  };

  
  return (
    <div className="container mx-auto  bg-white p-6 rounded-md">
      <div>
        <h2 className="font-bold text-black">Deposit</h2>
      </div>

      <div className="mt-2">
        <form onSubmit={handleDeposit}>
          <input
            type="text"
            placeholder="Amount"
            className="w-full border border-stroke mb-2 mt-5 rounded-md p-2"
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="flex mt-5">
            <button
              type="submit"
              className="bg-primary hover:primaryho text-white font-bold py-2 px-4 rounded-md"
            >
              Deposit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
