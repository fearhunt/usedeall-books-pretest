import React from "react";
import { useRouter } from "next/router";

type TabItemProps = {
  category: {
    id: number;
    name: string;
  };
}

const CategoryTab = (props: TabItemProps) => {
  const router = useRouter();

  const changeCategory = (id: number) => {
    router.push({
      query: {
        categoryId: id
      }
    });
  };

  const isSelected = (id: number): boolean => {
    const currentCategory = router.query.categoryId || "1";

    return id.toString() === currentCategory;  
  }

  return (
    <li className="list-none inline">
      <button onClick={() => changeCategory(props.category.id)} className={isSelected(props.category.id) ? 'tab-btn tab-btn-selected' : 'tab-btn'}>
        {props.category.name}
      </button>
    </li>
  )
};

export default CategoryTab;