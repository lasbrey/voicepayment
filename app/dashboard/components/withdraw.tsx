"use client";
import React, { useState } from "react";
import { UserAuth } from "@/components/config/authContext";
import { db } from "@/components/config/firebase";
import { collection, addDoc, updateDoc, getDocs } from "firebase/firestore";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Withdraw = () => {
  const { updateRecieve, user } = UserAuth();
  const [amount, setAmount] = useState("");

  const handleWithdraw = async (e) => {
    e.preventDefault();

    // Convert amount to a number (assuming it's a string)
    const withdrawAmount = parseFloat(amount);

    try {
      // Check if a document with the user's ID exists in 'moneyIn' collection
      const moneyInSnapshot = await getDocs(collection(db, "moneyOut"));
      let moneyInDocumentExists = false;
      moneyInSnapshot.forEach((doc) => {
        if (doc.data().userId === user?.uid) {
          moneyInDocumentExists = true;
          const existingAmount = doc.data().amount;
          // Update the existing document with the new deposited amount in 'moneyIn' collection
          updateDoc(doc.ref, {
            amount: existingAmount + withdrawAmount,
          });
        }
      });

      // If document with user's ID doesn't exist, create a new document in 'moneyIn' collection
      if (!moneyInDocumentExists) {
        await addDoc(collection(db, "moneyOut"), {
          userId: user?.uid,
          amount: withdrawAmount,
        });
      }

      // Check if a document with the user's ID exists in 'balance' collection
      const balanceSnapshot = await getDocs(collection(db, "balance"));
      let balanceDocumentExists = false;
      balanceSnapshot.forEach((doc) => {
        if (doc.data().userId === user?.uid) {
          balanceDocumentExists = true;
          const existingBalance = doc.data().balance;

          // Check if the user has enough balance to withdraw
          if (existingBalance >= withdrawAmount) {
            // Update the existing document with the new balance after withdrawal in 'balance' collection
            updateDoc(doc.ref, {
              balance: existingBalance - withdrawAmount,
            });
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Confirm Withdraw",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Success!", "Withdraw Successfull.", "success");
              }
            });
          } else {
            // If the user doesn't have enough balance, show an error message
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Insufficient balance. Cannot withdraw.!",
            });
          }
        }
      });

      // If document with user's ID doesn't exist, show an error message
      if (!balanceDocumentExists) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No balance record found for the user.",
        });
      }
    } catch (error) {
      console.error("Error handling deposit:", error);
    }
  };

  return (
    <div className="container mx-auto mt-3  bg-white p-6 rounded-md">
      <div>
        <h2 className="font-bold text-black">Withdraw</h2>
      </div>

      <div className="mt-2">
        <form onSubmit={handleWithdraw}>
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
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
