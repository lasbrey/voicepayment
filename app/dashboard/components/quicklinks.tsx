import React from "react";
import Link from "next/link";

const Quicklinks = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Link
        href="/dashboard/accountoperations"
        className="border border-gray-300 p-4 text-center"
      >
        Deposit & Withdraw
      </Link>
      <Link
        href="/dashboard/sendoperations"
        className="border border-gray-300 p-4 text-center"
      >
        Send Money
      </Link>
      <Link
        href="/dashboard/account"
        className="border border-gray-300 p-4 text-center"
      >
        Account
      </Link>
    </div>
  );
};

export default Quicklinks;
