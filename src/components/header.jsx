import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPenToSquare,
  faBell,
  faUserCircle,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../../public/logo2.png"; // Replace './logo.png' with the actual path to your logo image
import SearchBar from "./searchbar";
import { Client, Account } from "appwrite"; // Import Appwrite client and Account

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const account = new Account(client);

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication status

  useEffect(() => {
    // Check if user is logged in
    const checkAuthStatus = async () => {
      try {
        await account.get(); // If the user is logged in, this will succeed
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false); // If not logged in, an error will be thrown
      }
    };

    checkAuthStatus();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="fixed top-0 left-0 w-full text-white py-2 px-4 flex justify-between items-center shadow-md bg-white z-50">
      {/* Logo on the left */}
      <img src={logoImage} alt="Logo" className="h-12 rounded-full" />

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
        {/* <Link to="/signup" className="cursor-pointer text-gray-900">
          Get Pro!
        </Link> */}
        <div>
      {/* Other header content */}
      {isLoggedIn ? (
        <Link to="/pricing" className="cursor-pointer text-gray-900">
          Get Pro!
        </Link>
      ) : (
        <Link to="/signup" className="cursor-pointer text-gray-900">
          Get Pro!
        </Link>
      )}
      {/* Other header content */}
    </div>
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-4">
        <SearchBar />
        {/* Conditionally render the "create new blog" icon or login prompt */}
        {isLoggedIn ? (
          <Link to="/new">
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="lg"
              className="cursor-pointer p-2 text-gray-800 fa-fw fa-inverse"
            />
          </Link>
        ) : (
          <span className="text-gray-500">Login to create</span>
        )}

        {/* Notifications icon with outline and grey color */}
        <FontAwesomeIcon
          icon={faBell}
          size="lg"
          className="cursor-pointer p-2 text-gray-800 fa-fw fa-inverse"
        />

        {/* Profile page icon */}
        <Link to="/login" className="cursor-pointer text-gray-900">
          <FontAwesomeIcon
            icon={faUserCircle}
            size="lg"
            className="cursor-pointer rounded-full bg-gray-200 text-gray-800 p-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
