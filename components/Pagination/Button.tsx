import React from "react";

const PaginationButton = () => {
  return (
    <button onClick={() => console.log("Pressed pagination")} className="border border-accent-blue rounded-lg py-1 px-3 text-sm transition enabled:hover:bg-accent-blue enabled:hover:text-white disabled:bg-gray-500 disabled:opacity-40">
      Previous
    </button>
  )
};

export default PaginationButton;