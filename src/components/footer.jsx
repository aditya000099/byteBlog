import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faPenToSquare,
  faBell,
  faUserCircle,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../../public/logo2.png";

const Footer = () => {
    // const logoImage = ''; 

  return (
    <div className="text-white py-2 px-4 flex justify-between items-center shadow-md bg-white">
      {/* Logo on the left */}
      <img src={logoImage} alt="Logo" className="h-20 rounded-full" />

      {/* Center items */}
      <div className="flex items-center space-x-10 pr-24">
        {/* Quick Links */}
        <Link to="/" className="cursor-pointer text-gray-900">Home</Link>
        <Link to="/about" className="cursor-pointer text-gray-900">About Us</Link>
        <Link to="/pro" className="cursor-pointer text-gray-900">Get Pro!</Link>

        {/* Connect with Us */}
        <div className="flex items-center space-x-4 pr-10">
          <a href="#" className="text-gray-900">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="text-gray-900">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" className="text-gray-900">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
