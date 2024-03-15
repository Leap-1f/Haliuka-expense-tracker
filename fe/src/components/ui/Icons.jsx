import {
  IoMdCart,
  IoIosMedkit,
  IoIosRestaurant,
  IoIosMore,
} from "react-icons/io";
import {
  MdReceipt,
  MdDirectionsCar,
  MdEvent,
  MdAttachMoney,
  MdTrendingUp,
} from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";

const Icons = [
  { name: "Daily necessities", iconName: IoMdCart, color: "text-red-400" },
  { name: "Bills", iconName: MdReceipt, color: "text-yellow-400" },
  { name: "Transportation", iconName: MdDirectionsCar, color: "text-blue-400" },
  { name: "Health", iconName: IoIosMedkit, color: "text-green-400" },
  { name: "Grocery", iconName: FaShoppingBasket, color: "text-purple-400" },
  { name: "Eating out", iconName: IoIosRestaurant, color: "text-pink-400" },
  { name: "Entertainment", iconName: MdEvent, color: "text-indigo-400" },
  { name: "Salary", iconName: MdAttachMoney, color: "text-yellow-600" },
  { name: "Investment", iconName: MdTrendingUp, color: "text-green-500" },
  { name: "Other", iconName: IoIosMore, color: "text-gray-500" },
];

export default Icons;
