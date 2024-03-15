import { Input, Button, Navbar } from "../components/ui/index";
import React, { useState } from "react";
import {Category} from "../components/layout/index"

export default function Records() {
  const [toggle, setToggle] = useState("expense");
  const [state, setState] = useState({
    selectedOption: "Newest first",
    isOpen: false,
    openModal: false,
  });

  const handleOptionSelect = (option) => {
    setState({ selectedOption: option, isOpen: false });
  };
  const handleOpenModal = () => {
    setState({ openModal: !state.openModal });
  };

  const handleCloseModal = () => {
    setState({ openModal: !state.openModal });
  };
  const handleToggle = (toggle) => {
    setToggle(toggle);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar records={"font-bold"}></Navbar>
      <div className="bg-gray-100">
        {/* container */}
        <div className="container mx-auto flex justify-between">
          {/* left navigation bar */}
          <div className="my-6 border p-6 rounded-xl bg-white flex flex-col gap-6 h-[91vh]">
            <p className="font-bold text-2xl">Records</p>
            <button onClick={handleOpenModal}>
              <svg
                width="250"
                height="32"
                viewBox="0 0 250 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="250" height="32" rx="16" fill="#0166FF" />
                <path
                  d="M116 16C116 16.1658 115.934 16.3247 115.817 16.4419C115.7 16.5592 115.541 16.625 115.375 16.625H109.125V22.875C109.125 23.0408 109.059 23.1997 108.942 23.3169C108.825 23.4342 108.666 23.5 108.5 23.5C108.334 23.5 108.175 23.4342 108.058 23.3169C107.941 23.1997 107.875 23.0408 107.875 22.875V16.625H101.625C101.459 16.625 101.3 16.5592 101.183 16.4419C101.066 16.3247 101 16.1658 101 16C101 15.8342 101.066 15.6753 101.183 15.5581C101.3 15.4408 101.459 15.375 101.625 15.375H107.875V9.125C107.875 8.95924 107.941 8.80027 108.058 8.68306C108.175 8.56585 108.334 8.5 108.5 8.5C108.666 8.5 108.825 8.56585 108.942 8.68306C109.059 8.80027 109.125 8.95924 109.125 9.125V15.375H115.375C115.541 15.375 115.7 15.4408 115.817 15.5581C115.934 15.6753 116 15.8342 116 16Z"
                  fill="white"
                />
                <path
                  d="M128.031 10.6328L124.266 21H122.727L127.062 9.625H128.055L128.031 10.6328ZM131.188 21L127.414 10.6328L127.391 9.625H128.383L132.734 21H131.188ZM130.992 16.7891V18.0234H124.602V16.7891H130.992ZM139.367 19.3594V9H140.82V21H139.492L139.367 19.3594ZM133.68 16.8672V16.7031C133.68 16.0573 133.758 15.4714 133.914 14.9453C134.076 14.4141 134.302 13.9583 134.594 13.5781C134.891 13.1979 135.242 12.9062 135.648 12.7031C136.06 12.4948 136.518 12.3906 137.023 12.3906C137.555 12.3906 138.018 12.4844 138.414 12.6719C138.815 12.8542 139.154 13.1224 139.43 13.4766C139.711 13.8255 139.932 14.2474 140.094 14.7422C140.255 15.237 140.367 15.7969 140.43 16.4219V17.1406C140.372 17.7604 140.26 18.3177 140.094 18.8125C139.932 19.3073 139.711 19.7292 139.43 20.0781C139.154 20.4271 138.815 20.6953 138.414 20.8828C138.013 21.0651 137.544 21.1562 137.008 21.1562C136.513 21.1562 136.06 21.0495 135.648 20.8359C135.242 20.6224 134.891 20.3229 134.594 19.9375C134.302 19.5521 134.076 19.099 133.914 18.5781C133.758 18.0521 133.68 17.4818 133.68 16.8672ZM135.133 16.7031V16.8672C135.133 17.2891 135.174 17.6849 135.258 18.0547C135.346 18.4245 135.482 18.75 135.664 19.0312C135.846 19.3125 136.078 19.5339 136.359 19.6953C136.641 19.8516 136.977 19.9297 137.367 19.9297C137.846 19.9297 138.24 19.8281 138.547 19.625C138.859 19.4219 139.109 19.1536 139.297 18.8203C139.484 18.487 139.63 18.125 139.734 17.7344V15.8516C139.672 15.5651 139.581 15.2891 139.461 15.0234C139.346 14.7526 139.195 14.513 139.008 14.3047C138.826 14.0911 138.599 13.9219 138.328 13.7969C138.062 13.6719 137.747 13.6094 137.383 13.6094C136.987 13.6094 136.646 13.6927 136.359 13.8594C136.078 14.0208 135.846 14.2448 135.664 14.5312C135.482 14.8125 135.346 15.1406 135.258 15.5156C135.174 15.8854 135.133 16.2812 135.133 16.7031ZM148.398 19.3594V9H149.852V21H148.523L148.398 19.3594ZM142.711 16.8672V16.7031C142.711 16.0573 142.789 15.4714 142.945 14.9453C143.107 14.4141 143.333 13.9583 143.625 13.5781C143.922 13.1979 144.273 12.9062 144.68 12.7031C145.091 12.4948 145.549 12.3906 146.055 12.3906C146.586 12.3906 147.049 12.4844 147.445 12.6719C147.846 12.8542 148.185 13.1224 148.461 13.4766C148.742 13.8255 148.964 14.2474 149.125 14.7422C149.286 15.237 149.398 15.7969 149.461 16.4219V17.1406C149.404 17.7604 149.292 18.3177 149.125 18.8125C148.964 19.3073 148.742 19.7292 148.461 20.0781C148.185 20.4271 147.846 20.6953 147.445 20.8828C147.044 21.0651 146.576 21.1562 146.039 21.1562C145.544 21.1562 145.091 21.0495 144.68 20.8359C144.273 20.6224 143.922 20.3229 143.625 19.9375C143.333 19.5521 143.107 19.099 142.945 18.5781C142.789 18.0521 142.711 17.4818 142.711 16.8672ZM144.164 16.7031V16.8672C144.164 17.2891 144.206 17.6849 144.289 18.0547C144.378 18.4245 144.513 18.75 144.695 19.0312C144.878 19.3125 145.109 19.5339 145.391 19.6953C145.672 19.8516 146.008 19.9297 146.398 19.9297C146.878 19.9297 147.271 19.8281 147.578 19.625C147.891 19.4219 148.141 19.1536 148.328 18.8203C148.516 18.487 148.661 18.125 148.766 17.7344V15.8516C148.703 15.5651 148.612 15.2891 148.492 15.0234C148.378 14.7526 148.227 14.513 148.039 14.3047C147.857 14.0911 147.63 13.9219 147.359 13.7969C147.094 13.6719 146.779 13.6094 146.414 13.6094C146.018 13.6094 145.677 13.6927 145.391 13.8594C145.109 14.0208 144.878 14.2448 144.695 14.5312C144.513 14.8125 144.378 15.1406 144.289 15.5156C144.206 15.8854 144.164 16.2812 144.164 16.7031Z"
                  fill="white"
                />
              </svg>
            </button>
            {state.openModal && (
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
                            <p className="text-base absolute bottom-12 left-4">
                              Amount
                            </p>
                            <p className="absolute text-lg bottom-5 left-4 text-gray-400">
                              ₮
                            </p>
                            <Input
                              type={"number"}
                              placeholder={"000.00"}
                              addClass={
                                "pl-8 w-full mt-2 pt-3 h-[80px] invalid:border-pink-500 invalid:text-red-600 focus:outline-none input-no-arrows"
                              }
                            />
                          </div>
                        </div>
                        {/* Category */}
                        <div className="mt-4">
                          <p>Category</p>
                          <select
                            name="category"
                            id="vategory"
                            className="select select-bordered w-full mt-1 bg-gray-100"
                          >
                            <option value="" disabled selected>
                              Choose
                            </option>
                          </select>
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
            )}
            <Input
              placeholder={"Search..."}
              addClass={"h-[32px] w-full"}
            ></Input>
            {/* income & expense */}
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold">Types</p>
              <div className="flex gap-1 flex-col">
                <div className="flex gap-1">
                  <input type="radio" />
                  <label>All</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" />
                  <label>Income</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" />
                  <label>Expense</label>
                </div>
              </div>
            </div>
            {/* category */}
            <Category></Category>
            {/* Amount range */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-base">Amount Range</p>
              <div className="flex justify-between">
                <div className="p-4 bg-gray-50 border rounded-xl">
                  <input
                    className="bg-gray-50 max-w-[80px]"
                    placeholder="0"
                  ></input>
                </div>
                <div className="p-4 bg-gray-50 border rounded-xl">
                  <input
                    className="bg-gray-50 max-w-[80px]"
                    placeholder="1,000,000"
                  ></input>
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="40"
                  className="range range-xs range-primary"
                />
              </div>
            </div>
          </div>
          {/* right transactions */}
          <div className="max-w-[1200px]">
            <div className="w-[1200px] mt-10 flex flex-col gap-2">
              <div className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="11"
                      width="7.25"
                      viewBox="0 0 320 512"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                  </span>
                  <span>Last 30 Days</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="11"
                      width="7.25"
                      viewBox="0 0 320 512"
                    >
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </span>
                </div>
                <div className="dropdown">
                  <div
                    className="flex gap-2 items-center p-4 border rounded-lg bg-gray-50"
                    onClick={() =>
                      setState({ ...state, isOpen: !state.isOpen })
                    }
                  >
                    <span className="font-bold">{state.selectedOption}</span>
                    <span
                      className={`dropdown-icon ${state.isOpen ? "open" : ""}`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </span>
                  </div>
                  {state.isOpen && (
                    <div className="dropdown-menu">
                      <div
                        className="dropdown-item"
                        onClick={() => handleOptionSelect("Newest first")}
                      >
                        Newest first
                      </div>
                      <div
                        className="dropdown-item"
                        onClick={() => handleOptionSelect("Oldest first")}
                      >
                        Oldest first
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center bg-white border px-6 py-3 rounded-xl">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  Select all
                </div>
                <div>35,000₮</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <p className="font-bold">Today</p>
              <div className="flex justify-between bg-white rounded-xl px-6 py-3 items-center border">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" />
                  <div className="rounded-full p-2 bg-primary w-fit h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Bills</p>
                    <p>14:00</p>
                  </div>
                </div>
                <div>1000₮</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <p className="font-bold">Yesterday</p>
              <div className="flex justify-between bg-white rounded-xl px-6 py-3 items-center border">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" />
                  <div className="rounded-full p-2 bg-primary w-fit h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Bills</p>
                    <p>14:00</p>
                  </div>
                </div>
                <div>1000₮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
