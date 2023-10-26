"use client";
import React, { useState } from "react";
import { UserAuth } from "@/components/config/authContext";
import { db } from "@/components/config/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  updateDoc,
  getDocs,
} from "firebase/firestore";

const Biller = () => {
  const { updateRecieve, user } = UserAuth();
  const [billerId, setBillerId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();

    // Convert amount to a number (assuming it's a string)
    const sentAmount = parseFloat(amount);

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
            amount: existingAmount + sentAmount,
          });
        }
      });

      // If document with user's ID doesn't exist, create a new document in 'moneyIn' collection
      if (!moneyInDocumentExists) {
        await addDoc(collection(db, "moneyOut"), {
          userId: user?.uid,
          amount: sentAmount,
        });
      }
      // Query the balance collection to find the document with the entered biller ID
      const billerBalanceQuery = query(
        collection(db, "balance"),
        where("userId", "==", billerId)
      );
      const billerBalanceSnapshot = await getDocs(billerBalanceQuery);

      // Check if a document with the entered biller ID exists
      if (billerBalanceSnapshot.empty) {
        alert("No balance record found for the entered Biller ID.");
        return;
      }

      const billerDoc = billerBalanceSnapshot.docs[0];
      const billerBalance = billerDoc.data().balance;

      // Query the balance collection for the sender's (user's) balance
      const senderBalanceQuery = query(
        collection(db, "balance"),
        where("userId", "==", user?.uid)
      );
      const senderBalanceSnapshot = await getDocs(senderBalanceQuery);

      // Check if the sender has sufficient balance
      if (senderBalanceSnapshot.empty) {
        alert("No balance record found for the user.");
        return;
      }

      const senderDoc = senderBalanceSnapshot.docs[0];
      const senderBalance = senderDoc.data().balance;

      if (senderBalance >= sentAmount) {
        // Update biller's balance
        await updateDoc(billerDoc.ref, {
          balance: billerBalance + sentAmount,
        });

        // Update sender's balance
        await updateDoc(senderDoc.ref, {
          balance: senderBalance - sentAmount,
        });

        alert("Sent Successful");
      } else {
        // If the user doesn't have enough balance, show an error message
        alert("Insufficient balance. Cannot Send.");
      }
    } catch (error) {
      console.error("Error handling deposit:", error);
    }
  };
  return (
    <div className="container mx-auto  bg-white p-6 rounded-md">
      <div>
        <h2 className="font-bold text-black">Pay a Biller/Friends</h2>
      </div>

      <div className="mt-2">
        <form onSubmit={handleSend}>
          <input
            type="email"
            placeholder="Biller ID"
            className="w-full border border-stroke mb-2 mt-5 rounded-md p-2"
          />
          <input
            type="text"
            id="customer-desc"
            placeholder="₦100.00"
            className="w-full border border-stroke mb-2 mt-5 rounded-md p-2 text-xl"
          />

          <div className="flex mt-5">
            <button
              type="submit"
              className="bg-primary hover:primaryho text-white font-bold py-2 px-4 rounded-md"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Biller;
