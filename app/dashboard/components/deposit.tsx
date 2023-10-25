import React from "react";

const Deposit = () => {
  return (
    <div className="container mx-auto  bg-white p-6 rounded-md">
      <div>
        <h2 className="font-bold text-black">Deposit</h2>
      </div>

      <div className="mt-2">
        <input
          type="text"
          placeholder="Amount"
          className="w-full border border-stroke mb-2 mt-5 rounded-md p-2"
        />

        <div className="flex mt-5">
          <button
            type="submit"
            className="bg-primary hover:primaryho text-white font-bold py-2 px-4 rounded-md"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
