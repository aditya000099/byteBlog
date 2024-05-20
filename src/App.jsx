import React, { useState } from "react";
import "./index.css";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlogPost from "./pages/newblog";
import Login from "./pages/login";
import Signup from "./pages/signup";
import BlogDetail from "./pages/fullblog";
import CategoryBlogs from "./pages/categoryBlogs";

// import cursor from '../public/cursor.png';

const App = () => {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   document.documentElement.setAttribute('data-theme', newTheme);
  //   setTheme(newTheme);
  // };
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
    {/* <div className={darkMode ? 'dark' : ''}>
            <div className="p-4 bg-gray-800 text-white flex justify-between">
                <h1 className="text-xl font-bold">My App</h1>
                <button
                    className="p-2 bg-gray-700 rounded"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    Toggle Dark Mode
                </button>
            </div> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/new" element={<CreateBlogPost />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/dashboard" element={<HomePage/>} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/category/:category" element={<CategoryBlogs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      {/* </div> */}
    </>
  );
};

export default App;
