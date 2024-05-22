// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import {
//   faPenToSquare,
//   faBell,
//   faUserCircle,
//   faToggleOn,
//   faToggleOff,
// } from "@fortawesome/free-solid-svg-icons";
// import logoImage from "../../public/pp.png"; // Replace './logo.png' with the actual path to your logo image
// // import SearchBar from "./searchbar";
// import { Client, Account, Databases, Query } from "appwrite"; // Import Appwrite client and Account
// import Header from "../components/header";

// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("6643380c00076d57eba2");

// const account = new Account(client);

// const databases = new Databases(client);

// // const storage = new Storage(client);

// // const userid = "";

// const UserAccount = () => {
//   const [theme, setTheme] = useState("light");
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication status

//   const [userId, setUserId] = useState(null); // State to store user ID
//   const [currentUser, setCurrentUser] = useState(null); // State to store user ID
//   const [userBlogs, setUserBlogs] = useState([]);
//   //   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if user is logged in
//     const checkAuthStatus = async () => {
//       try {
//         const user = await account.get(); // If the user is logged in, this will succeed
//         setIsLoggedIn(true);
//         setUserId(user.$id);
//         getUserFromID(user.$id); // Store the user ID in state
//       } catch (error) {
//         setIsLoggedIn(false); // If not logged in, an error will be thrown
//         navigate("/login"); // Redirect to login page if not logged in
//       }
//     };

//     const getUserFromID = async (useridd) => {
//       try {
//         const currentuser = await databases.getDocument(
//           "database", // databaseId
//           "users", // collectionId
//           useridd, // documentId
//           [] // queries (optional)
//         );
//         // console.log("Successfully fetched user", currentuser);
//         setCurrentUser(currentuser); // Store the user ID in state
//         fetchUserBlogs(useridd);
//         // setBlogs(response.documents);
//       } catch (error) {
//         console.error("Failed to fetch user", error);
//       }
//     };

//     const fetchUserBlogs = async (userId) => {
//         try {
//           const response = await databases.listDocuments("database", "blogs", [
//             Query.equal("author", userId),
//           ]);
//           setUserBlogs(response.documents);
//         } catch (error) {
//           console.error("Failed to fetch user blogs", error);
//         }
//       };

//     checkAuthStatus();
//   }, [navigate]);

//   const handleBlogClick = (id) => {
//     navigate(`/blog/${id}`);
//   };

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     document.documentElement.setAttribute("data-theme", newTheme);
//     setTheme(newTheme);
//   };

//   return (
//     <>
//       <Header />
//       <div className="bg-gray-100  min-h-96 py-12 mt-10">
//         <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="px-6 py-8">
//             <div className="text-center">
//               <img
//                 src={logoImage} // Replace with the path to your user's profile picture
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full mx-auto mb-4"
//               />
//               <h1 className="text-2xl font-bold text-gray-800 mb-2">
//                 {currentUser && currentUser.name}
//               </h1>
//               <p className="text-sm text-gray-600">
//                 {currentUser && currentUser.email}
//               </p>
//             </div>
//             <div className="mt-8">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                 Account Information
//               </h2>
//               <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg mb-4">
//                 <span className="text-sm text-gray-800">Pro User</span>
//                 <span
//                   className={`text-sm font-semibold ${
//                     currentUser && currentUser.prouser === "true"
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {currentUser && currentUser.prouser === "true" ? "Yes" : "No"}
//                 </span>
//               </div>
//               {/* Add more account information here if needed */}
//             </div>
//           </div>
//         </div>
//         </div>
      
//         <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-6 text-center">
//   Your Blogs
// </h2>

// <div className="mt-8 flex justify-center items-center w-full">
//   <div className="flex flex-wrap justify-center">
//     {userBlogs.map((blog) => (
//       <div
//         key={blog.$id}
//         className="bg-slate-100 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full md:w-1/3 m-4"
//         onClick={() => handleBlogClick(blog.$id)}
//       >
//         <img
//           src={blog.photo ? blog.photo : sampleImage}
//           alt="Blog"
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-4">
//           <h2 className="text-2xl font-bold mb-2 text-gray-900">
//             {blog.title}
//           </h2>
//           <div
//             className="blog-content text-x text- text-gray-800"
//             dangerouslySetInnerHTML={{
//               __html: blog.body.length > 150
//                 ? blog.body.substring(0, 130) + "..."
//                 : blog.body
//             }}
//           ></div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

          
          
//     </>
//   );
// };

// export default UserAccount;


import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  faPenToSquare,
  faBell,
  faUserCircle,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../../public/pp.png"; // Replace './logo.png' with the actual path to your logo image
// import SearchBar from "./searchbar";
import { Client, Account, Databases, Query } from "appwrite"; // Import Appwrite client and Account
import Header from "../components/header";
import './accountpage.css';

import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const account = new Account(client);

const databases = new Databases(client);

// const storage = new Storage(client);

// const userid = "";

const Loader = () => (
  <div className="fixed inset-0 bg-opacity-80 bg-slate-50 flex justify-center items-center z-50">
  <div className="spinner center">
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
</div>
    {/* <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-100"></div> */}
  </div>
);

const UserAccount = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication status

  const [userId, setUserId] = useState(null); // State to store user ID
  const [currentUser, setCurrentUser] = useState(null); // State to store user ID
  const [userBlogs, setUserBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  //   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status

  const [totalViews, setTotalViews] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const checkAuthStatus = async () => {
      try {
        const user = await account.get(); // If the user is logged in, this will succeed
        setIsLoggedIn(true);
        setUserId(user.$id);
        getUserFromID(user.$id); // Store the user ID in state
      } catch (error) {
        setIsLoggedIn(false); // If not logged in, an error will be thrown
        navigate("/login"); // Redirect to login page if not logged in
      }
    };

    const getUserFromID = async (useridd) => {
      try {
        const currentuser = await databases.getDocument(
          "database", // databaseId
          "users", // collectionId
          useridd, // documentId
          [] // queries (optional)
        );
        setCurrentUser(currentuser); // Store the user ID in state
        fetchUserBlogs(useridd);
        // setBlogs(response.documents);
      } catch (error) {
        console.error("Failed to fetch user", error);
      } 
    };

    const fetchUserBlogs = async (userId) => {
      try {
        const response = await databases.listDocuments("database", "blogs", [
          Query.equal("author", userId),
        ]);
        setUserBlogs(response.documents);
        calculateTotalViews(response.documents);
      } catch (error) {
        console.error("Failed to fetch user blogs", error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching user data
      }
    };

    const calculateTotalViews = (blogs) => {
        const total = blogs.reduce((acc, blog) => acc + blog.views, 0);
        setTotalViews(total);

        
      };

    checkAuthStatus();
  }, [navigate]);

//   const data = {
//     labels: blogs.map((blog) => blog.title),
//     datasets: [
//       {
//         label: 'Views',
//         data: blogs.map((blog) => blog.views),
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         borderColor: 'rgba(0, 0, 0, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      {isLoading && <Loader />} {/* Render loader when isLoading is true */}
      <Header />
      <div className="bg-gray-100  min-h-96 py-12 mt-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center">
              <img
                src={logoImage} // Replace with the path to your user's profile picture
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {currentUser && currentUser.name}
              </h1>
              <p className="text-sm text-gray-600">
                {currentUser && currentUser.email}
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Account Information
              </h2>
              <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm text-gray-800">Pro User</span>
                <span
                  className={`text-sm font-semibold ${
                    currentUser && currentUser.prouser === "true"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {currentUser && currentUser.prouser === "true"
                    ? "Yes"
                    : "No"}
                </span>
              </div>
              {/* Add more account information here if needed */}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-6 text-center">
        Your Blogs
      </h2>
      <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-6 text-center">
       {totalViews} views
      </h2>

      {/* {blogs.length > 0 && ( */}
          {/* <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Total Views: {totalViews}</h2>
            <Bar data={data} options={options} />
          </div> */}
        {/* )} */}
       <div className="mt-8 flex justify-center items-center w-full">
   <div className="flex flex-wrap justify-center">
     {userBlogs.map((blog) => (
       <div
         key={blog.$id}
         className="bg-slate-100 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full md:w-1/3 m-4"
         onClick={() => handleBlogClick(blog.$id)}
       >
         <img
           src={blog.photo ? blog.photo : sampleImage}
           alt="Blog"
           className="w-full h-48 object-cover"
         />
         <div className="p-4">
           <h2 className="text-2xl font-bold mb-2 text-gray-900">
             {blog.title}
           </h2>
           <div
             className="blog-content text-x text- text-gray-800"
             dangerouslySetInnerHTML={{
               __html: blog.body.length > 150
                 ? blog.body.substring(0, 130) + "..."
                  : blog.body
             }}
           ></div>
         </div>
       </div>
    ))}
   </div>
 </div>

          
          
     </>
  );
};

export default UserAccount;