import React from "react";

const Transactions = () => {
  const transactions = [
    {
      name: "John Doe",
      description: "Purchase of Accessories",
      amount: "₦50.00",
      status: "Completed",
    },
    {
      name: "Jane Smith",
      description: "Online Services",
      amount: "₦120.00",
      status: "Pending",
    },
    {
      name: "Alice Johnson",
      description: "Failed Transaction",
      amount: "₦80.00",
      status: "Failed",
    },
  ];

  return (
    <div className="relative overflow-x-auto container mx-auto bg-white rounded-md shadow">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-t-md">
        <h2 className="font-bold text-black">Transaction History</h2>
      </div>
      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3">Description</th>
            <th className="px-3 py-3">Amount</th>
            <th className="px-3 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-gray-100 dark:bg-gray-900"
                  : "bg-white dark:bg-gray-800"
              }
            >
              <td className="px-3 py-4">{transaction.name}</td>
              <td className="px-3 py-4">{transaction.description}</td>
              <td className="px-3 py-4">{transaction.amount}</td>
              <td
                className={`px-2 py-4 ${
                  transaction.status === "Completed"
                    ? "bg-green-200 dark:bg-green-700"
                    : transaction.status === "Failed"
                    ? "bg-red-200 dark:bg-red-700"
                    : "bg-yellow-200 dark:bg-yellow-700"
                }`}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
