import ResCards, { withDiscount } from "./ResCards";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");

  const DiscountTag = withDiscount(ResCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://f425ede4-7bdf-432d-8e22-e92e5fa60abc.mock.pstmn.io"
    );
    const data = await response.json();
    const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestuarants(restaurants || []);
    setFilteredRestaurants(restaurants || []);
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return <h1>You are offline!! Please check your internet connection!</h1>;
  }

  return listOfRestuarants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="justify-center bg-gradient-to-b from-gray-800 to-orange-600 min-h-screen">
      {/* Filters & Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center p-4 flex-wrap">

        {/* Search Input + Button */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-cyan-700 outline-none p-2 rounded-md flex-1"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search restaurants"
          />
          <button
            className="flex items-center gap-1 px-4 py-2 bg-lime-200 hover:bg-lime-300 transition rounded-md font-bold"
            onClick={() => {
              const filteredRes = listOfRestuarants.filter((res) =>
                res.info.name.toLowerCase().includes(searchName.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        {/* Rating Filter */}
        <div>
          <button
            className="px-4 py-2 bg-orange-200 hover:bg-orange-300 rounded-md font-bold"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestuarants.filter((x) => x.info.avgRating >= 4.3)
              );
            }}
          >
            GoodRatedRestaurants
          </button>
        </div>

        {/* Username Input */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <label className="font-bold text-white whitespace-nowrap">UserName:</label>
          <input
            type="text"
            className="border border-solid border-cyan-700 outline-none p-2 rounded-md font-bold flex-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
      </div>

      {/* Restaurant List */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants?.map((ele) => (
          <Link to={`/restaurant/${ele.info.id}`} key={ele.info.id}>
            {ele.info?.aggregatedDiscountInfoV2 ? (
              <DiscountTag ResData={ele} />
            ) : (
              <ResCards ResData={ele} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
