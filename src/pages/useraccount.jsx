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

import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const account = new Account(client);

const databases = new Databases(client);

// const storage = new Storage(client);

// const userid = "";

const Loader = () => (
  <div className="fixed inset-0 bg-opacity-80 bg-slate-50 flex justify-center items-center z-50">
    <style>
      {`.spinner {
    font-size: 28px;
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
  }
  
  .spinner.center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  .spinner .spinner-blade {
    position: absolute;
    left: 0.4629em;
    bottom: 0;
    width: 0.074em;
    height: 0.2777em;
    border-radius: 0.0555em;
    background-color: transparent;
    -webkit-transform-origin: center -0.2222em;
    -ms-transform-origin: center -0.2222em;
    transform-origin: center -0.2222em;
    animation: spinner-fade9234 1s infinite linear;
  }
  
  .spinner .spinner-blade:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  
  .spinner .spinner-blade:nth-child(2) {
    -webkit-animation-delay: 0.083s;
    animation-delay: 0.083s;
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
  }
  
  .spinner .spinner-blade:nth-child(3) {
    -webkit-animation-delay: 0.166s;
    animation-delay: 0.166s;
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
  }
  
  .spinner .spinner-blade:nth-child(4) {
    -webkit-animation-delay: 0.249s;
    animation-delay: 0.249s;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  
  .spinner .spinner-blade:nth-child(5) {
    -webkit-animation-delay: 0.332s;
    animation-delay: 0.332s;
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
  }
  
  .spinner .spinner-blade:nth-child(6) {
    -webkit-animation-delay: 0.415s;
    animation-delay: 0.415s;
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);
  }
  
  .spinner .spinner-blade:nth-child(7) {
    -webkit-animation-delay: 0.498s;
    animation-delay: 0.498s;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  
  .spinner .spinner-blade:nth-child(8) {
    -webkit-animation-delay: 0.581s;
    animation-delay: 0.581s;
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg);
  }
  
  .spinner .spinner-blade:nth-child(9) {
    -webkit-animation-delay: 0.664s;
    animation-delay: 0.664s;
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);
  }
  
  .spinner .spinner-blade:nth-child(10) {
    -webkit-animation-delay: 0.747s;
    animation-delay: 0.747s;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  
  .spinner .spinner-blade:nth-child(11) {
    -webkit-animation-delay: 0.83s;
    animation-delay: 0.83s;
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg);
  }
  
  .spinner .spinner-blade:nth-child(12) {
    -webkit-animation-delay: 0.913s;
    animation-delay: 0.913s;
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg);
  }
  
  @keyframes spinner-fade9234 {
    0% {
      background-color: #69717d;
    }
  
    100% {
      background-color: transparent;
    }
  }`}
    </style>
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

  //   const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the SignOut method from Appwrite SDK
      await account.deleteSessions();

      // Redirect to the login page or any other page
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
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
                  {currentUser && currentUser.prouser === "true" ? "Yes" : "No"}
                </span>
              </div>
              {/* Add more account information here if needed */}
            </div>
            <div className="flex justify-center items-center h-full mt-10">
              <button
                onClick={handleLogout}
                className="bg-red-100 border border-red-600 text-red-600 hover:bg-red-200 hover:text-red-700 px-4 py-2 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-6 text-center">
        Your Blogs
      </h2>
      <div className="flex justify-center items-center h-full mt-10 gap-16">
        <div class="card">
          <style>{`.card {
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 320px;
  border-radius: 20px;
}

.title {
  display: flex;
  align-items: center;
}

.title span {
  position: relative;
  padding: 0.5rem;
  background-color: #10B981;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
}

.title span svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  height: 1rem;
}

.title-text {
  margin-left: 0.5rem;
  color: #374151;
  font-size: 18px;
}

.percent {
  margin-left: 0.5rem;
  color: #02972f;
  font-weight: 600;
  display: flex;
}

.data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.data p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #1F2937;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: left;
}

.data .range {
  position: relative;
  background-color: #E5E7EB;
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
}

.data .range .fill {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #10B981;
  width: 76%;
  height: 100%;
  border-radius: 0.25rem;
}`}</style>
          <div class="title">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width={20}
                height={20}
              >
                <path
                  fill="#f0f0f0"
                  d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                />
              </svg>{" "}
            </span>

            <p class="title-text">Views</p>
            <p class="percent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                fill="currentColor"
                height="20"
                width="20"
              >
                <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
              </svg>{" "}
              20%
            </p>
          </div>
          <div class="data">
            <p>{totalViews}</p>

            <div class="range">
              <div class="fill"></div>
            </div>
          </div>
        </div>
        <div class="card">
          <style>{`.card {
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 320px;
  border-radius: 20px;
}

.title {
  display: flex;
  align-items: center;
}

.title span {
  position: relative;
  padding: 0.5rem;
  background-color: #10B981;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
}

.title span svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  height: 1rem;
}

.title-text {
  margin-left: 0.5rem;
  color: #374151;
  font-size: 18px;
}

.percent {
  margin-left: 0.5rem;
  color: #02972f;
  font-weight: 600;
  display: flex;
}

.data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.data p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #1F2937;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: left;
}

.data .range {
  position: relative;
  background-color: #E5E7EB;
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
}

.data .range .fill {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #10B981;
  width: 76%;
  height: 100%;
  border-radius: 0.25rem;
}`}</style>
          <div class="title">
            <span>
              <svg
                width="20"
                fill="currentColor"
                height="20"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
              </svg>
            </span>
            <p class="title-text">Revenue</p>
            <p class="percent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                fill="currentColor"
                height="20"
                width="20"
              >
                <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
              </svg>{" "}
              0%
            </p>
          </div>
          <div class="data">
            <p>$0</p>

            {/* <div class="range">
            <div class="fill"></div>
          </div> */}
          </div>
        </div>
      </div>
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-6 text-center">
        {totalViews} views
      </h2> */}
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
                    __html:
                      blog.body.length > 150
                        ? blog.body.substring(0, 130) + "..."
                        : blog.body,
                  }}
                ></div>
                <h2 className="text-base font-bold mt-2 text-gray-900">
                  {blog.views} views
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
