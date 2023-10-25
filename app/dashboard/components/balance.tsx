import React from "react";

const Balance = () => {
  return (
    <div className="">
      <div className="max-w-sm p-6 bg-white border border-stroke rounded-lg">
        <a href="#">
          <h5 className="mb-2 font-semibold tracking-tight text-black dark:text-white">
            Solid Account Balance
          </h5>
        </a>
        <p className="mb-3 text-2xl font-extralight ">₦100.00</p>
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
        <p className="mb-3 text-2xl font-extralight ">₦100.00</p>
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
        <p className="mb-3 text-2xl font-extralight ">₦500.00</p>
        <a href="#" className="inline-flex items-center">
          Total sent or spent
        </a>
      </div>
    </div>
  );
};

export default Balance;
