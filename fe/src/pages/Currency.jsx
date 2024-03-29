import { Button, Input, Text, Logo } from "../components/ui/index";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useData } from "@/components/utils/Context";

export default function Currency() {
  const router = useRouter();
  const { userData, setUserData } = useData();
  const selectRef = useRef(null);
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState("MNT");
  const [amount, setAmount] = useState("");

  const advanceStep = async () => {
    if (step === 1) {
      const selectedCurrency = selectRef.current.value;
      setCurrency(selectedCurrency === "usd" ? "USD" : "MNT");
      setStep(2);``
    } else if (step === 2) {
      try {
        const userDataToSend = {
          ...userData,
          currency_type: currency,
          amount: amount,
        };
        const response = await fetch("http://localhost:8080/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataToSend),
        });
        if (response.ok) {
          console.log("user created successfully");
        }
        if (!response.ok) throw new Error("Failed to create new user");
        const responseData = await response.json();
        setStep(3);
        router.push("/dashboard");
      } catch (error) {
        console.error("Error:", error);
      }
    }
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
            {step === 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M21 16C21 16.9889 20.7068 17.9556 20.1573 18.7779C19.6079 19.6001 18.827 20.241 17.9134 20.6194C16.9998 20.9978 15.9945 21.0969 15.0245 20.9039C14.0546 20.711 13.1637 20.2348 12.4645 19.5355C11.7652 18.8363 11.289 17.9454 11.0961 16.9755C10.9031 16.0055 11.0022 15.0002 11.3806 14.0866C11.759 13.173 12.3999 12.3921 13.2221 11.8427C14.0444 11.2932 15.0111 11 16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16ZM31 8V24C31 24.2652 30.8946 24.5196 30.7071 24.7071C30.5196 24.8946 30.2652 25 30 25H2C1.73478 25 1.48043 24.8946 1.29289 24.7071C1.10536 24.5196 1 24.2652 1 24V8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7H30C30.2652 7 30.5196 7.10536 30.7071 7.29289C30.8946 7.48043 31 7.73478 31 8ZM29 13.7937C27.8645 13.458 26.8311 12.8435 25.9938 12.0062C25.1565 11.1689 24.542 10.1355 24.2062 9H7.79375C7.45801 10.1355 6.84351 11.1689 6.00623 12.0062C5.16895 12.8435 4.1355 13.458 3 13.7937V18.2062C4.1355 18.542 5.16895 19.1565 6.00623 19.9938C6.84351 20.8311 7.45801 21.8645 7.79375 23H24.2062C24.542 21.8645 25.1565 20.8311 25.9938 19.9938C26.8311 19.1565 27.8645 18.542 29 18.2062V13.7937Z"
                  fill="white"
                />
              </svg>
            )}
            {step === 2 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z"
                  fill="white"
                />
              </svg>
            )}
            {step === 3 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28.7076 9.70757L12.7076 25.7076C12.6147 25.8005 12.5044 25.8743 12.383 25.9246C12.2616 25.975 12.1315 26.0009 12.0001 26.0009C11.8687 26.0009 11.7385 25.975 11.6171 25.9246C11.4957 25.8743 11.3854 25.8005 11.2926 25.7076L4.29257 18.7076C4.10493 18.5199 3.99951 18.2654 3.99951 18.0001C3.99951 17.7347 4.10493 17.4802 4.29257 17.2926C4.48021 17.1049 4.7347 16.9995 5.00007 16.9995C5.26543 16.9995 5.51993 17.1049 5.70757 17.2926L12.0001 23.5863L27.2926 8.29257C27.4802 8.10493 27.7347 7.99951 28.0001 7.99951C28.2654 7.99951 28.5199 8.10493 28.7076 8.29257C28.8952 8.48021 29.0006 8.7347 29.0006 9.00007C29.0006 9.26543 28.8952 9.51993 28.7076 9.70757Z"
                  fill="white"
                />
              </svg>
            )}
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
        <Button text="Confirm" onClick={advanceStep} addClass={"bg-primary"} />
      </div>
    </div>
  );
}
