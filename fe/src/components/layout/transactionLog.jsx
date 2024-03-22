import { useEffect, useState } from "react";
import { useData } from "../utils/Context";
import { Icons } from "../ui";
import { formatDistanceToNow } from "date-fns";

export const TransactionLog = () => {
  const { renderIcon, transactions } = useData();
  const formatDate = (dateString) => {
    const formattedDate = formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
    });
    return formattedDate;
  };

  return (
    <div>
      {transactions &&
        transactions.map((el, index) => {
          const matchingIcon = Icons.find((icon) => icon.name === el.name);
          console.log(el.transaction_type);
          const transactionClass =
            el.transaction_type === "EXP" ? "text-red-500" : "text-green-500";
          return (
            <div className="px-6 w-full py-3 border-b" key={index}>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center justify-center">
                  {matchingIcon && (
                    <div>
                      {renderIcon(matchingIcon.iconName, matchingIcon.color)}
                    </div>
                  )}
                  <div>
                    <p>{el.name}</p>
                    <p className="text-xs text-neutral">{formatDate(el.createdat)}</p>
                  </div>
                </div>
                <div className={transactionClass}>
                  {el.transaction_type === "EXP" ? "-" : "+"} {el.amount}₮
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
