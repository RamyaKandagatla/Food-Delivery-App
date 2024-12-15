import { useState, useEffect } from "react";
import { RES_INFO } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const res = await fetch(RES_INFO + resId);
    const json = await res.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
