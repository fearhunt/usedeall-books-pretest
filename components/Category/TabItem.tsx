import React from "react";
import { useRouter } from "next/router";

type TabItemProps = {
  category: {
    id: number,
    name: string
  };
  isSelected: boolean
}

const CategoryTab = (props: TabItemProps) => {
  const router = useRouter();

  const changeCategory = (id: number) => {
    router.push({
      query: {
        categoryId: id
      }
    });

    console.log("Category selected")
  }

  return (
    <li className="list-none inline">
      <button onClick={() => changeCategory(props.category.id)} className={true ? 'tab-btn tab-btn-selected' : 'tab-btn'}>
        {props.category.name}
      </button>
    </li>
  )
};

export default CategoryTab;