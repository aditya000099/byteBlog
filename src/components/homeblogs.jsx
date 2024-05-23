import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sampleImage from "../../public/cursor.png"; // Replace with the path to your static image
import { Client, Databases, ID, Storage, Account } from "appwrite";
import { motion } from "framer-motion";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments("database", "blogs");
        setBlogs(response.documents);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (id) => {
    databases.getDocument("database", "blogs", id).then((response) => {
      const currentViews = response.views;
      databases.updateDocument("database", "blogs", id, {
        views: currentViews + 1,
      });
      console.log(currentViews + 1);
    });

    navigate(`/blog/${id}`);
  };

  // Skeleton component
  const Skeleton = () => (
    <div className="bg-slate-100 rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-1 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-1 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>
    </div>
  );

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div exit={{opacity:0}} transition={transition} className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-10 text-center text-gray-700">
        Trending now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} />
            )) // Render 9 skeleton loaders
          : blogs.map((blog) => (
              <div
                key={blog.$id}
                className="bg-slate-100 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
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
                </div>
              </div>
            ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
