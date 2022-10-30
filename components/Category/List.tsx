import React from "react";

import CategoryTabItem from "./TabItem";

type CategoryListProps = {
  categories: {
    id: number;
    name: string;
  }[];
}

const CategoryList = (props: CategoryListProps) => {
  return (
    <ul className="overflow-x-auto py-2 pl-0 my-2 whitespace-nowrap space-x-4">
      {props.categories.map((category: any, index: number) => (
        <CategoryTabItem key={index} category={category} />
      ))}
    </ul>
  )
};

export default CategoryList;