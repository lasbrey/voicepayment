import React from "react";

const Quicklinks = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <a href="#" className="border border-gray-300 p-4 text-center">
        Deposit & Withdraw
      </a>
      <a href="#" className="border border-gray-300 p-4 text-center">
        Pay Bills
      </a>
      <a href="#" className="border border-gray-300 p-4 text-center">
        Send Money
      </a>
    </div>
  );
};

export default Quicklinks;
