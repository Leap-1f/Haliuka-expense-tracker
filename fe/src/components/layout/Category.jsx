import { Icons } from "../ui/index";
import { useState } from "react";
import { useData } from "../utils/Context";

export function Category() {
  const { renderIcon } = useData();

  const [categories, setCategories] = useState(Icons);
  const addCategory = async (category) => {
    try {
      const data = await fetch("http://localhost:8080/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        console.log("category added successfully");
      } else {
        console.error("Failed to add category", response.statusText);
      }
    } catch (err) {
      console.error("Error adding category", err.message);
    }
  };

  const categoryToAdd = {
    name: "New Category",
    description: "Description of the new category",
  };

  addCategory(categoryToAdd);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p>Category</p>
        <p>Clear</p>
      </div>
      <div className="flex flex-col gap-2">
        {Icons.map((category, index) => (
          <div
            key={index}
            className="flex justify-between hover:bg-gray-100 rounded-lg items-center"
          >
            <div className="flex gap-2 items-center">
              <div>{renderIcon(category.iconName, category.color)}</div>
              <p>{category.name}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.9166 10.5833L9.74998 12.7499C9.48609 13.0138 9.18401 13.0729 8.84373 12.927C8.50345 12.7812 8.33331 12.5208 8.33331 12.1458V7.85411C8.33331 7.47911 8.50345 7.21869 8.84373 7.07286C9.18401 6.92702 9.48609 6.98605 9.74998 7.24994L11.9166 9.41661C12 9.49994 12.0625 9.59022 12.1041 9.68744C12.1458 9.78466 12.1666 9.88883 12.1666 9.99994C12.1666 10.1111 12.1458 10.2152 12.1041 10.3124C12.0625 10.4097 12 10.4999 11.9166 10.5833Z"
                fill="#1C1B1F"
              />
            </svg>
          </div>
        ))}
        <div className="flex gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z"
              fill="#0166FF"
            />
          </svg>
          Add category
        </div>
      </div>
    </div>
  );
}
