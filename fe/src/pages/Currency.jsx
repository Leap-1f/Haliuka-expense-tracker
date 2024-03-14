import { Button, Input, Text, Logo } from "../components/ui/index";
import { useState, useRef } from "react";
import {router} from "next/router";

export default function Currency() {
  const selectRef = useRef(null);
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState("MNT");
  const [amount, setAmount] = useState("");

  const advanceStep = async () => {
    if (step === 1) {
      const selectedCurrency = selectRef.current.value;
      setCurrency(selectedCurrency === "usd" ? "USD" : "MNT");
    } else if (step === 2) {
      try {
        const userDataToSend = {
          ...userData,
          currency_type: currency,
          amount: amount,
        };
        console.log(userDataToSend);
        const response = await fetch("http://localhost:8080/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataToSend),
        });

        if (!response.ok) throw new Error("Failed to create new user");
        const responseData = await response.json();
        router.push('/Dashboard');
      } catch (error) {
        console.error("Error:", error);
      }
    }
    setStep((currentStep) => currentStep + 1);
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <select
            name="currency"
            id="currency"
            ref={selectRef}
            className="select select-bordered w-full max-w-xs bg-gray-100 font-bold"
          >
            <option value="mnt">MNT - Mongolian Tugrik</option>
            <option value="usd">USD - United States Dollar</option>
          </select>
        );
      case 2:
        return (
          <Input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            type="text"
            addClass="w-[352px]"
          />
        );
      default:
        return <p>All steps completed</p>;
    }
  };

  const getTitleAndText = () => {
    switch (step) {
      case 1:
        return {
          title: "Select base currency",
          text: "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one.",
        };
      case 2:
        return {
          title: "Set up your cash Balance",
          text: "How much cash do you have in your wallet?",
        };
      case 3:
        return {
          title: "Good Job!",
          text: "Your very first account has been created. Now continue to dashboard and start tracking.",
        };
      default:
        return { title: "", text: "" };
    }
  };

  const { title, text } = getTitleAndText();

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-12 items-center my-10">
        <Logo width="29" height="28" addClass={"gap-2 scale-125"} />
        <div>
          <ul className="steps text-sm">
            <li className="step step-primary px-6">Currency</li>
            <li className={`step ${step === 1 ? "" : "step-primary"}`}>
              Balance
            </li>
            <li className={`step ${step === 3 ? "step-primary" : ""}`}>
              Finish
            </li>
          </ul>
        </div>
      </div>
      {/* Container */}
      {
        <div className="flex flex-col items-center mt-44">
          {/* Logo */}
          <div className="bg-primary btn-circle flex items-center justify-center">
            {/* SVGs for steps 1, 2, and 3 */}
          </div>
          {/* Title */}
          <Text
            text={getTitleAndText().title}
            addClass="text-2xl font-bold text-slate-900 text-center"
          />
          <div className="mt-6">
            <div className="max-w-[384px] flex flex-col items-center">
              {renderContent()}
              <Text text={getTitleAndText().text} addClass={"text-xs my-3"} />
            </div>
          </div>
        </div>
      }
      {/* Button */}
      <div className="max-w-[384px] mx-auto">
        <Button text="Confirm" onClick={advanceStep} />
      </div>
    </div>
  );
}
