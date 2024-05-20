import React, { useState, useEffect } from 'react';
// import { databases } from '../appwriteConfig'; // Make sure this points to your Appwrite configuration file
import sampleImage from '../../public/bit.png'; // Replace with the path to your static image
import { Client, Databases, ID, Storage, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await databases.listDocuments('database', 'blogs');
                setBlogs(response.documents);
            } catch (error) {
                console.error('Failed to fetch blogs', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.$id} className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                        <img src={sampleImage} alt="Blog" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{blog.name}</h2>
                            <p className="text-gray-300">
                                {blog.body.length > 150 ? blog.body.substring(0, 150) + '...' : blog.body}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
