import React from "react";
import ResList from "./ResList";

const RestaurantCategory = (props) => {

  const {data, showItem, setShowItem} = props;

  const onHandleClick = () => {
    setShowItem();
  }

  return <div className="my-4 p-2 mx-auto border bg-gray-100 shadow-lg rounded-md border-b-2
    border-b-neutral-300 w-9/12 text-center">
      <div className="justify-between text-start flex font-bold cursor-pointer" 
        onClick={onHandleClick}>
          <div className="text-lg">{data.title} ({data.itemCards.length})</div>
          <div>⬇</div>
      </div>
      {showItem && 
        <ResList data={data.itemCards}/>
      }
    </div>
  }

export default RestaurantCategory;