"use client";
import React, { useContext } from "react";

import { CategoryContext } from "@/context/CategoryContext";

const Category = ({ cat }: { cat: any }) => {
  const { categoryId, changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.$id)}
      className={`${
        cat.$id === categoryId
          ? "bg-blue-700 border-2 border-gray-50"
          : "border-2 border-gray-700"
      } shrink-0 rounded-lg py-1.5 px-5 text-base font-medium text-white hover:cursor-pointer`}
    >
      {cat.title.toUpperCase()}
    </div>
  );
};

export default Category;
