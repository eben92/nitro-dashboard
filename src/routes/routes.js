import { AiTwotoneHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill, RiSettings3Fill } from "react-icons/ri";
import {
  FaTelegramPlane,
  FaMoneyBillWave,
  FaChartLine,
  FaWallet,
  FaUserAlt,
} from "react-icons/fa";

export const routes = [
  {
    name: "Home",
    id: "",
    to: "/home",
    path: "/home",
    icon: <AiTwotoneHome />,
  },
  {
    name: "Budget",
    id: "budget",
    to: "/budget",
    path: "/budget",
    icon: <BiTask />,
  },
  {
    name: "Transactions",
    id: "transactions",
    to: "/transactions",
    path: "/transactions",
    icon: <FaTelegramPlane />,
  },
  {
    name: "Subscriptions",
    id: "subscriptions",
    to: "/subscriptions",
    path: "/subscriptions",
    icon: <BsFillCreditCardFill />,
  },
  {
    name: "Loans",
    id: "loans",
    to: "/loans",
    path: "/loans",
    icon: <FaMoneyBillWave />,
  },
  {
    name: "Reports",
    id: "reports",
    to: "/reports",
    path: "/reports",
    icon: <FaChartLine />,
  },
  {
    name: "Savings",
    id: "savings",
    to: "/savings",
    path: "/savings",
    icon: <FaWallet />,
  },
  {
    name: "Financial Advice",
    id: "financial-advice",
    to: "/financial-advice",
    path: "/financial-advice",
    icon: <RiMoneyDollarCircleFill />,
  },
  {
    name: "Account",
    id: "account",
    to: "/account",
    path: "/account",
    icon: <FaUserAlt />,
  },
  {
    name: "Settings",
    id: "settings",
    to: "/settings",
    path: "/settings",
    icon: <RiSettings3Fill />,
  },
];
