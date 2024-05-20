import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { databases } from '../appwriteConfig'; // Ensure this points to your Appwrite configuration file
import sampleImage from '../../public/cursor.png';
 // Replace with the path to your static image
 import { Client, Databases, ID, Storage, Account } from "appwrite";

 const client = new Client()
   .setEndpoint("https://cloud.appwrite.io/v1")
   .setProject("6643380c00076d57eba2");
 
 const databases = new Databases(client);
 
 const storage = new Storage(client);
 
 const account = new Account(client);

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await databases.getDocument('database', 'blogs', id);
                setBlog(response);
            } catch (error) {
                console.error('Failed to fetch blog', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div className="text-white">Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 bg-slate-100 text-white rounded-lg shadow-lg">
            <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-64 object-cover mb-4 rounded-md" />
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{blog.title}</h1>
            <div className="text-xl text-gray-800 whitespace-pre-wrap">{blog.body}</div>
        </div>
    );
};

export default BlogDetail;
