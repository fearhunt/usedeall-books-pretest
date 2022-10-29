import React from "react";
import { useRouter } from "next/router";

const CategoryTab = () => {
  const router = useRouter();

  const testClick = () => {
    console.log(router.query)
    console.log("Category select")
  }

  return (
    <li className="list-none inline">
      <button onClick={testClick} className={true ? 'tab-btn tab-btn-selected' : 'tab-btn'}>
        Category Name
      </button>
    </li>
  )
};

export default CategoryTab;