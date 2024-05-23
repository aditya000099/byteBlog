import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import feat from "../../public/feat.png";
import feat3 from "../../public/feat3.png";
import { Client, Databases, ID, Storage, Account, Query } from "appwrite";
import { motion } from "framer-motion";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);

const FeaturedSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [nblogs, setNBlogs] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments("database", "blogs", [
          Query.equal("featured", "true"),
        ]);
        setBlogs(response.documents);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false); // Set loading to false after fetching blogs
      }
    };
    const fetchNBlogs = async () => {
      try {
        const response = await databases.listDocuments("database", "blogs", [
          Query.equal("featured", "false"),
          Query.orderDesc("views"),
        ]);
        setNBlogs(response.documents);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading2(false); // Set loading to false after fetching blogs
      }
    };

    fetchBlogs();
    fetchNBlogs();
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

  const Skeleton = () => (
    <div className="bg-gray-300 animate-pulse rounded-lg p-6 w-full h-96"></div>
  );

  return (
    <motion.div
      className="mt-28 relative height-auto container mx-auto px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">
            byteBlog Featured
          </h1>
          {loading ? (
            <Skeleton />
          ) : (
            blogs.length > 0 && (
              <motion.div
                className="rounded-xl bg-fuchsia-50 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleBlogClick(blogs[0].$id)}
              >
                <img
                  src={blogs[0].photo ? blogs[0].photo : feat}
                  alt={blogs[0].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {blogs[0].title}
                  </h2>
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html:
                        blogs[0].body.length > 150
                          ? blogs[0].body.substring(0, 520) + "..."
                          : blogs[0].body,
                    }}
                  />
                </div>
              </motion.div>
            )
          )}
        </div>
        <div className="w-full lg:w-1/3 hidden lg:block">
          <h1 className="text-2xl font-bold mb-10 text-center text-gray-900 mt-2">
            Most Viewed
          </h1>
          {loading2 ? (
            <Skeleton />
          ) : (
            nblogs.slice(0, 5).map((blog) => (
              <motion.div
                key={blog.$id}
                className="bg-slate-100 rounded-lg p-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleBlogClick(blog.$id)}
              >
                <h2 className="text-lg font-semibold">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mt-2">
                  {blog.body.length > 50
                    ? `${blog.body.substring(0, 50)}...`
                    : blog.body}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedSection;
