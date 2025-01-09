import { useState, useEffect } from "react";
import { RES_INFO } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    // const res = await fetch(RES_INFO + resId);
    /**to solve the cors issue, took the response of the kfc and used for every restaurant,  this cors issue is for the production deployment only, for the local is working fine */
    const res = await fetch('https://run.mocky.io/v3/c8e0ced2-ca52-496c-bf3c-d11340b1433b')
    const json = await res.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
