// src/components/SearchBar.js

import React, { useState } from 'react';
import { Client, Databases } from "appwrite";
import sampleImage from '../../public/cursor.png'; // Replace with the path to your static image

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await databases.listDocuments('database', 'blogs');
            const filtered = response.documents.filter(blog =>
                blog.title.toLowerCase().includes(query.toLowerCase())
                //  ||
                // blog.body.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        } catch (error) {
            console.error('Failed to fetch blogs', error);
        }
    };

    return (
        <>
            {isSearching && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 max-w-2xl w-full relative">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="Search blogs..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full p-2 rounded-md bg-white bg-opacity-70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
                                <svg
                                    className="w-6 h-6 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </form>
                        <button 
                            onClick={() => setIsSearching(false)}
                            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="mt-4">
                            {results.length === 0 ? (
                                <p className="text-center text-gray-900">No blogs found.</p>
                            ) : (
                                results.map((blog) => (
                                    <div
                                        key={blog.$id}
                                        className="bg-slate-100 text-white rounded-lg shadow-lg overflow-hidden mb-4"
                                    >
                                        <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-48 object-cover rounded-t-lg" />
                                        <div className="p-4">
                                            <h2 className="text-2xl font-bold mb-2 text-gray-900">{blog.title}</h2>
                                            <p className="text-gray-800">
                                                {blog.body.length > 150 ? blog.body.substring(0, 130) + '...' : blog.body}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
            <button
                onClick={() => setIsSearching(true)}
                className="p-2 bg-transparent text-gray-800 rounded-full focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </>
    );
};

export default SearchBar;
