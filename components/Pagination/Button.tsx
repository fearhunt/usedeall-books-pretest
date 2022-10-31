import { useRouter } from "next/router";
import React from "react";

type PaginationButtonProps = {
  text: string;
  type: string;
  booksSize?: number;
}

const PaginationButton = (props: PaginationButtonProps) => {
  const router = useRouter();

  const changePage = (type: string) => {
    const currentPage = router.query.page || "0";
    const currentPageNum: number = +currentPage;

    router.push({
      query: {
        page: (type === "prev") ? (currentPageNum - 1) : (currentPageNum + 1)
      }
    })
  };

  const isDisabled = (type: string, booksSize: number = 0): boolean => {
    let status = true;
    
    if (type === "prev") {
      const currentPage = router.query.page || "0";

      if (currentPage != "0") {
        status = false;
      }
    } else if (type === "next") {
      // Default book size on fetch based on design
      if (booksSize === 12) {
        status = false;
      }
    } 

    return status;
  };

  return (
    <button onClick={() => changePage(props.type)} className="border border-primary rounded-lg py-1 px-3 text-sm transition enabled:hover:bg-primary enabled:hover:text-white disabled:bg-gray-500 disabled:opacity-40" disabled={isDisabled(props.type, props.booksSize)}>
      {props.text}
    </button>
  )
};

export default PaginationButton;