import { useContext, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="bg-gradient-to-b from-gray-400 to-orange-500 shadow-md z-50 relative">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img className="w-20 md:w-28" src={APP_LOGO} alt="App Logo" />
          <h1 className="font-bold text-xl md:text-2xl font-signature">
            Hey Foodies!!!
          </h1>
        </div>

        {/* Desktop Nav - shows only on lg and above */}
        <nav className="hidden lg:flex items-center space-x-4 font-bold text-base">
          <span>Online: {onlineStatus ? "🟢" : "🔴"}</span>
          <Link to="/">Home</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/contact">ContactUs</Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/cart">Cart [{cartItems.length}]</Link>
          <button
            className="py-1 px-3 bg-white rounded hover:bg-gray-100 transition"
            onClick={() =>
              setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnName}
          </button>
          <span className="text-nowrap">{loggedInUser}</span>
        </nav>

        {/* Hamburger Button - visible on md and below */}
        <button
          className="text-3xl lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white z-50 flex flex-col items-center justify-center space-y-6 text-xl font-semibold">
          {/* Close button */}
          <button
            className="absolute top-4 right-6 text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>AboutUs</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>ContactUs</Link>
          <Link to="/grocery" onClick={() => setMenuOpen(false)}>Grocery</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart [{cartItems.length}]</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
