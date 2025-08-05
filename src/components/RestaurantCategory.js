import React from "react";
import ResList from "./ResList";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {
  return (
    <div className="my-4 p-4 mx-auto bg-white shadow-md rounded-lg w-full sm:w-10/12 md:w-9/12">
      {/* Header: Title + Toggle Icon */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={setShowItem}
        role="button"
        aria-expanded={showItem}
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {data.title} <span className="text-gray-500">({data.itemCards.length})</span>
        </h3>
        <span className={`transform transition-transform duration-300 ${showItem ? "rotate-180" : ""}`}>
          ⬇
        </span>
      </div>

      {/* Item List */}
      {showItem && (
        <div className="mt-4">
          <ResList data={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
