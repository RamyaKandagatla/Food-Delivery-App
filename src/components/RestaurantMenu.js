import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex,setShowIndex] = useState(null)

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer/>
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const cardsCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => category?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  return (
    <div className="text-center m-6">
      <h2 className="text-xl font-bold py-2">{name}</h2>
      <h3 className="text-lg font-medium border-b-2 border-b-neutral-200 py-6">{cuisines.join(', ')} - {costForTwoMessage}</h3>
      {cardsCategory.map( (category, index) => 
        <RestaurantCategory
          key= {category?.card?.card?.title}
          data={category?.card?.card}
          showItem={showIndex === index ? true : false}
          setShowItem = {() => {showIndex === index ? setShowIndex(null) : setShowIndex(index)}}
        />)
      }
    </div>
  );
};

export default RestaurantMenu;

