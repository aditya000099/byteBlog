import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { databases } from '../appwriteConfig'; // Ensure this points to your Appwrite configuration file
import sampleImage from "../../public/cursor.png";
// Replace with the path to your static image
import { Client, Databases, ID, Storage, Account } from "appwrite";
import Header from "../components/header";
import writerImage from "../../public/pp.png";
import Blogs from "../components/homeblogs";
import RelatedBlogs from "../components/relatedblogs";
import Footer from "../components/footer";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

//  const databases = new Databases(client);

//  const storage = new Storage(client);

//  const account = new Account(client);

//  const calculateReadingTime = (text) => {
//   const wordsPerMinute = 200; // Average reading speed
//   const words = text.split(/\s+/).length; // Split by whitespace and count words
//   const minutes = Math.ceil(words / wordsPerMinute);
//   return minutes;
// };

const NoUser = () => {
  // const { id } = useParams();
  // const [blog, setBlog] = useState(null);

  // useEffect(() => {
  //     const fetchBlog = async () => {
  //         try {
  //             const response = await databases.getDocument('database', 'blogs', id);
  //             setBlog(response);
  //         } catch (error) {
  //             console.error('Failed to fetch blog', error);
  //         }
  //     };

  //     fetchBlog();
  // }, [id]);

  // if (!blog) {
  //     return <div className="text-white">Loading...</div>;
  // }

  return (
    <>
      <Header />
      <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-slate-100 text-white rounded-lg  mt-48">
        {/* <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-auto object-cover rounded-3xl mb-4" /> */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-400 mb-4"
            viewBox="0 0 448 512"
          >
            {" "}
            <path
              fill="#a3a3a3"
              d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
            />
          </svg>
          <p className="text-gray-600 mb-4">Login to access this feature</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold mb-2 mt-20 text-center text-gray-900">Related Articles</h1>
      <RelatedBlogs /> */}
      {/* <div className="mt-16">
      </div>
      <Footer /> */}
    </>
  );
};

export default NoUser;
