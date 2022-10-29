import React from "react";

import CategoryTabItem from "./TabItem";

const CategoryList = () => {
  return (
    <ul className="overflow-x-auto py-2 pl-0 whitespace-nowrap space-x-4">
      {[...Array(10)].map((_: any, index: number) => (
        <CategoryTabItem key={index} category={{ id: index, name: `Test Category ${index + 1}`}} isSelected={false} />
      ))}
    </ul>
  )
};

export default CategoryList;