import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const cardsCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-orange-100 px-4 sm:px-6 md:px-10 py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-2">
          {name}
        </h2>
        <h3 className="text-md sm:text-lg text-gray-700 text-center mb-6 border-b border-gray-200 pb-4">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h3>

        {/* Render Categories */}
        <div className="space-y-4">
          {cardsCategory.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItem={showIndex === index}
              setShowItem={() =>
                showIndex === index ? setShowIndex(null) : setShowIndex(index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
