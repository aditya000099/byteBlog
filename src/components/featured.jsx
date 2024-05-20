import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import feat from '../../public/feat.png'
import feat3 from '../../public/feat3.png'
import { Client, Databases, ID, Storage, Account, Query } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);

const FeaturedSection = () => {

  const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await databases.listDocuments('database', 'blogs', [
                  Query.equal('featured', "true")
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

    const data = [
        {
          id: 1,
          imageUrl: feat3,
          title: 'Future of Web Development in 2024',
          description: 'As we step into 2024, the landscape of web development continues to evolve at a rapid pace, driven by technological advancements, changing user expectations, and emerging trends. In this blog, we will explore what the future holds for web development in 2024 and beyond.',
        },
      ];


  return (
    <div className="mt-6 relative height-auto">
    <div className='flex justify-center content-center text-4xl font-extrabold mb-6'>Featured Blog</div>
    <div className="container">
      {blogs.map(blog=> (
        <div key={blog.$id} onClick={() => handleBlogClick(blog.$id)} className="image-container rounded-xl overflow-hidden flex justify-center content-center">
          <img src={blog.photo} alt={blog.title} className="w-2/3 h-auto rounded-lg" />
          <div className="text-box absolute bg-white bottom-4 left-4/12 w-4/12 p-4 rounded-xl shadow-md transition duration-300 ease-in-out">
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <p className="text-sm mt-2 overflow-hidden" style={{ maxHeight: '3em', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {blog.body}
            </p>
          </div>
        </div>
      ))}
    </div>
    <style>
      {`
        .image-container:hover .text-box {
          background-color: #f0f0f0; /* Change background color on hover */
          transform: translateY(-10px); /* Move the text box up on hover */
        }
      `}
    </style>
  </div>
  
  )
}

export default FeaturedSection