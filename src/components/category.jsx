import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faJs, faAngular, faVuejs, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import react from '../../public/react.png'
import next from '../../public/next.png'
import ang from '../../public/ang.png'
import chat from '../../public/chat.png'
import rust from '../../public/rust.png'
import bit from '../../public/bit.png'

import "../index.css";

const Category = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     document.documentElement.setAttribute("data-theme", newTheme);
//     setTheme(newTheme);
//   };

const logos = [
    { name: 'React', imageSrc: react },
    { name: 'Next.js', imageSrc: next },
    { name: 'AngularJS', imageSrc: ang },
    { name: 'Vue.js', imageSrc: chat},
    { name: 'Rust', imageSrc: rust },
    { name: 'Blockchain', imageSrc: bit },
  ];

  const colors = ['#74C0FC', '#FFD700', '#FF69B4', '#32CD32' , '#74C0FC'];

  return (
    <div className="w-full pt-16">
  <div className="flex justify-between">
    <span className="cursor-pointer pl-12 text-xl">Browse By Category</span>
    <span className="cursor-pointer pr-12 text-lg">See all categories {"->"}</span>
  </div>

  <div className='w-full p-16'>
  <div className='flex justify-between gap-4'>
    {logos.map((item, index) => (
      <div
        key={index}
        className='w-48 p-4 bg-white shadow-md rounded-md text-center transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex flex-col justify-center items-center h-52 hover:bg-purple-600 hover:text-white'
      >
        <img src={item.imageSrc} alt={item.name} className='w-12 h-12 mb-2' /> {/* Use local image */}
        <span>{item.name}</span>
      </div>
    ))}
  </div>
</div>


</div>
  );
};

export default Category;
