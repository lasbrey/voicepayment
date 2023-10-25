import React from "react";

const Withdraw = () => {
  return (
    <div className="container mx-auto mt-2 bg-white p-6 rounded-md">
      <div>
        <h2 className="font-bold text-black">Withdraw</h2>
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
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
