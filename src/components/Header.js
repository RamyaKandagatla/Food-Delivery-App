import { useContext, useState } from "react";
import {APP_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [ btnName, setBtnName ] = useState("Login");
  
  const OnlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  return(
    <div className="flex justify-between bg-gradient-to-b from-gray-400 to-orange-500">
      <div className="logo-container">
        <img className="w-32" src={APP_LOGO}></img>
      </div>
      <h1 className="flex items-center font-bold text-center text-4xl font-signature">Hey Foodies!!!</h1>
      <div className="flex items-center mx-2">
        <ul className="flex font-bold">
          <li className="px-4">
            onlineStatus : {OnlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to='/'>Home</Link>
          </li>
          <li className="px-4">
            <Link to='/about'>AboutUs</Link>
          </li>
          <li className="px-4">
            <Link to='/contact'>ContactUs</Link>
          </li>
          <li className="px-4">
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to='/cart'>Cart [{cartItems.length}]</Link>
          </li>
          <button className="px-4" onClick={() => 
            { btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;