import { Input, Button } from "../ui/index";
import React, { useState } from "react";
import { Icons, AddIcon } from "../ui/index";
import { useData } from "../utils/Context";

export function Modal() {
  const { handleCloseModal, toggle, handleToggle, renderIcon } = useData();

  const [open, setOpen] = useState(false);

  const [category, setCategory] = useState("");
  const chooseCategory = () => {
    setOpen(!open);
    setCategory();
  };

  return (
    <div className="fixed inset-0 z-[2] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[744px] p-8 rounded-lg">
        {/* Add record and Close */}
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Add Record</p>
          <button onClick={handleCloseModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z"
                fill="#0F172A"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-12 mt-5">
          {/* left */}
          <div class="flex flex-1 flex-col w-48 mb-5 relative">
            {/* toggle button */}
            <div className="flex relative justify-center">
              {/* Expense Button */}
              <button
                className={`z-[1] w-full transition-colors duration-300 ${
                  toggle === "expense"
                    ? "bg-primary text-white hover:bg-blue-700"
                    : "bg-gray-200 text-black"
                } py-2 px-4 rounded-full`}
                onClick={() => handleToggle("expense")}
              >
                Expense
              </button>
              {/* Income Button */}
              <button
                className={`z-[1] w-full transition-colors duration-300 ${
                  toggle === "income"
                    ? "bg-accent text-white hover:bg-green-700"
                    : "bg-gray-200 text-black"
                } py-2 px-4 rounded-full`}
                onClick={() => handleToggle("income")}
              >
                Income
              </button>
              <div className="bg-gray-200 w-[50px] transition-colors duration-300 absolute h-full"></div>
            </div>
            {/* Amount */}
            <div className="mt-6 w-full">
              <div>
                <div className="relative">
                  <p className="text-base absolute bottom-12 left-4">Amount</p>
                  <p className="absolute text-lg bottom-5 left-4 text-gray-400">
                    ₮
                  </p>
                  <Input
                    type={"number"}
                    placeholder={"000.00"}
                    addClass={"pl-8 w-full mt-2 pt-3 h-[80px] input-no-arrows"}
                  />
                </div>
              </div>
              {/* Category */}
              <div className="mt-4 relative">
                <p>Category</p>
                <button
                  onClick={chooseCategory}
                  className="flex mt-1 hover:cursor-pointer items-center justify-between bg-gray-100 border border-gray-300 w-full p-4 rounded-lg"
                >
                  <p className="text-gray-400">Choose a category</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="rotate-90"
                  >
                    <path
                      d="M11.9166 10.5833L9.74998 12.7499C9.48609 13.0138 9.18401 13.0729 8.84373 12.927C8.50345 12.7812 8.33331 12.5208 8.33331 12.1458V7.85411C8.33331 7.47911 8.50345 7.21869 8.84373 7.07286C9.18401 6.92702 9.48609 6.98605 9.74998 7.24994L11.9166 9.41661C12 9.49994 12.0625 9.59022 12.1041 9.68744C12.1458 9.78466 12.1666 9.88883 12.1666 9.99994C12.1666 10.1111 12.1458 10.2152 12.1041 10.3124C12.0625 10.4097 12 10.4999 11.9166 10.5833Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </button>
                {open && (
                  <div className="absolute w-full h-44 overflow-auto shadow-md rounded-t-none rounded-box">
                    <ul className="bg-white">
                      {AddIcon.map((el) => (
                        <li className="flex gap-2 p-3 border-b items-center">
                          <span>{renderIcon(el.iconName, el.color)}</span>
                          <span>{el.name}</span>
                        </li>
                      ))}
                      {Icons.map((el) => (
                        <li className="flex gap-2 p-3 items-center">
                          <span>{renderIcon(el.iconName, el.color)}</span>
                          <span>{el.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                {/* Date */}
                <div className="mt-4 mb-6">
                  <p>Date</p>
                  <input
                    type="date"
                    className="input input-bordered mt-1 w-full bg-gray-100"
                  />
                </div>
              </div>
              <Button
                text="Add Record"
                addClass={
                  toggle === "expense"
                    ? "bg-primary"
                    : "bg-accent hover:bg-green-700"
                }
              ></Button>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <p>Payee</p>
              <Input
                placeholder={"Write here"}
                addClass={"w-full mt-1"}
                type={"number"}
              ></Input>
            </div>
            <div>
              <p>Note</p>
              <textarea
                className="border pl-4 pt-4 resize-none mt-1 rounded-lg bg-gray-100 border-gray-300 w-full h-full"
                rows="9"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
