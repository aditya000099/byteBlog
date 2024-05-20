import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { databases } from '../appwriteConfig'; // Make sure this points to your Appwrite configuration file
import sampleImage from '../../public/cursor.png'; // Replace with the path to your static image
import { Client, Databases, ID, Storage, Account, Query } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);

const CategoryBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    const { category } = useParams();
    // const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await databases.listDocuments('database', 'blogs', [
                    Query.equal('tagone', category)
                ]);
                setBlogs(response.documents);
            } catch (error) {
                console.error('Failed to fetch blogs', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleBlogClick = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.$id}
                        className="bg-slate-100 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                        onClick={() => handleBlogClick(blog.$id)}
                    >
                        <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-48 object-cover" />

                        {/* <img
                      src={shop.photo}
                      alt="Display Photo"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: "100%" }}
                    /> */}
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">{blog.title}</h2>
                            <p className=" text-x text- text-gray-800">
                                {blog.body.length > 150 ? blog.body.substring(0, 130) + '...' : blog.body}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBlogs;
