import React, { useState } from "react";
import "./index.css";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import cursor from '../public/cursor.png';

const App = () => {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   document.documentElement.setAttribute('data-theme', newTheme);
  //   setTheme(newTheme);
  // };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
