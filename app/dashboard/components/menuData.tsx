import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Transactions",
    newTab: false,
    path: "/dashboard/transactions",
  },
  {
    id: 3,
    title: "Deposit & Withdraw",
    newTab: false,
    path: "/dashboard/accountoperations",
  },
  {
    id: 4,
    title: "Send Money ",
    newTab: false,
    path: "/dashboard/sendoperations",
  },
  {
    id: 5,
    title: "Account ",
    newTab: false,
    path: "/dashboard/account",
  },
];

export default menuData;
