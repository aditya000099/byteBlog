import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sampleImage from '../../public/cursor.png'; // Replace with the path to your static image
import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);

const RelatedBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

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

    const handleBlogClick = (id) => {
        databases.getDocument("database", "blogs", id).then((response) => {
            const currentViews = response.views;
            databases.updateDocument("database", "blogs", id, {
              views: currentViews + 1,
            });
            console.log(currentViews+1);
          });
        navigate(`/blog/${id}`);
    };

    // Limit the blogs to the first three
    const limitedBlogs = blogs.slice(1, 4);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {limitedBlogs.map((blog) => (
                    <div
                        key={blog.$id}
                        className="bg-slate-100 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                        onClick={() => handleBlogClick(blog.$id)}
                    >
                        <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">{blog.title}</h2>
                            <p className="text-gray-800">
                                {blog.body.length > 150 ? blog.body.substring(0, 130) + '...' : blog.body}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedBlogs;
