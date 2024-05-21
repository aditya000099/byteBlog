import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { faPen, faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { faPenToSquare, faBell, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faPenToSquare,
  faBell,
  faUserCircle,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../../public/logo2.png"; // Replace './logo.png' with the actual path to your logo image
import SearchBar from "./searchbar";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="fixed top-0 left-0 w-full text-white py-2 px-4 flex justify-between items-center shadow-md bg-white z-50">
      {/* Logo on the left */}
      <img src={logoImage} alt="Logo" className="h-12 rounded-full" />

      {/* <div className="flex items-center space-x-10">
        <span className="cursor-pointer text-gray-900">Home</span>
        <span className="cursor-pointer text-gray-900">About Us</span>
        <span className="cursor-pointer text-gray-900">Get Pro!</span>
      </div> */}

      <div className="flex items-center space-x-10">
        {/* Home link */}
        <Link to="/" className="cursor-pointer text-gray-900">
          Home
        </Link>

        {/* About Us link */}
        <Link to="/about" className="cursor-pointer text-gray-900">
          About Us
        </Link>

        {/* Get Pro link */}
        <Link to="/pro" className="cursor-pointer text-gray-900">
          Get Pro!
        </Link>
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-4">
      <SearchBar />
        {/* Write an article icon with outline and grey color */}
        <Link to="/new">
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="lg"
            className="cursor-pointer p-2 text-gray-500 fa-fw fa-inverse"
          />
        </Link>

        {/* Notifications icon with outline and grey color */}
        <FontAwesomeIcon
          icon={faBell}
          size="lg"
          className="cursor-pointer p-2 text-gray-500 fa-fw fa-inverse"
        />

        {/* Profile page icon */}
        <FontAwesomeIcon
          icon={faUserCircle}
          size="lg"
          className="cursor-pointer rounded-full bg-gray-200 text-gray-800 p-2"
        />
      </div>
    </div>
  );
};

export default Header;
