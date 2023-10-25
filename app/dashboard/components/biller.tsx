import React from "react";

const Biller = () => {
  return (
    <div className="container mx-auto  bg-white p-6 rounded-md">
      <div>
        <h2 className="font-bold text-black">Pay a Biller/Friends</h2>
      </div>

      <div className="mt-2">
        <input
          type="email"
          placeholder="Biller ID"
          className="w-full border border-stroke mb-2 mt-5 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Description"
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
      </div>
    </div>
  );
};

export default Biller;
