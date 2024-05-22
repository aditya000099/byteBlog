import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { databases } from '../appwriteConfig'; // Ensure this points to your Appwrite configuration file
import sampleImage from '../../public/cursor.png';
 // Replace with the path to your static image
 import { Client, Databases, ID, Storage, Account } from "appwrite";
import Header from '../components/header';
import writerImage from '../../public/pp.png';
import Blogs from '../components/homeblogs';
import RelatedBlogs from '../components/relatedblogs';
import Footer from '../components/footer';

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
      <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-slate-100 text-white rounded-sm shadow-lg mt-48">
        {/* <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-auto object-cover rounded-3xl mb-4" /> */}
        <h1 className="text-5xl font-bold mb-8 mt-14 text-center text-gray-900">OOPS!</h1>
        
        
        <div className="text-xl text-gray-800 whitespace-pre-wrap">You need to login to access this feature</div>
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
