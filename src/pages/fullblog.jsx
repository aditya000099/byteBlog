// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import { databases } from '../appwriteConfig'; // Ensure this points to your Appwrite configuration file
// import sampleImage from '../../public/cursor.png';
//  // Replace with the path to your static image
//  import { Client, Databases, ID, Storage, Account } from "appwrite";
// import Header from '../components/header';
// import writerImage from '../../public/pp.png';
// import Blogs from '../components/homeblogs';
// import RelatedBlogs from '../components/relatedblogs';
// import Footer from '../components/footer';

//  const client = new Client()
//    .setEndpoint("https://cloud.appwrite.io/v1")
//    .setProject("6643380c00076d57eba2");
 
//  const databases = new Databases(client);
 
//  const storage = new Storage(client);
 
//  const account = new Account(client);

//  const calculateReadingTime = (text) => {
//   const wordsPerMinute = 200; // Average reading speed
//   const words = text.split(/\s+/).length; // Split by whitespace and count words
//   const minutes = Math.ceil(words / wordsPerMinute);
//   return minutes;
// };

// const BlogDetail = () => {
//     const { id } = useParams();
//     const [blog, setBlog] = useState(null);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             try {
//                 const response = await databases.getDocument('database', 'blogs', id);
//                 setBlog(response);
//             } catch (error) {
//                 console.error('Failed to fetch blog', error);
//             }
//         };

//         fetchBlog();
//     }, [id]);

//     if (!blog) {
//         return <div className="text-white">Loading...</div>;
//     }

//     return (
//         <>
//       <Header />
//       <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-slate-100 text-white rounded-sm shadow-lg mt-12">
//         <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-auto object-cover rounded-3xl mb-4" />
//         <h1 className="text-5xl font-bold mb-8 mt-14 text-center text-gray-900">{blog.title}</h1>
        
//         <div className="flex items-center justify-start mb-8 mt-14">
//           <img src={writerImage} alt="Writer" className="w-12 h-12 rounded-full mr-4" />
//           <div className="flex-grow">
//             <hr className="border-gray-300 mb-2" />
//             <h2 className="text-xl  text-left text-gray-900">Anonymous Writer</h2>
//             <hr className="border-gray-300 mt-2" />
//           </div>
//         </div>
        
//         <div className="text-xl text-gray-800 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: blog.body}}></div>
//       </div>
//       <h1 className="text-3xl font-bold mb-2 mt-20 text-center text-gray-900">Related Articles</h1>
//       <RelatedBlogs />
//       <div className="mt-16">
//       </div>
//       <Footer />
//     </>
//     );
    
// };

// export default BlogDetail;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sampleImage from '../../public/cursor.png'; // Replace with the path to your static image
import { Client, Databases, ID, Storage, Account, Query } from "appwrite";
import Header from '../components/header';
import writerImage from '../../public/pp.png';
import RelatedBlogs from '../components/relatedblogs';
import Footer from '../components/footer';

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await databases.getDocument('database', 'blogs', id);
        setBlog(response);
      } catch (error) {
        console.error('Failed to fetch blog', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await databases.listDocuments('database', 'comments', [
          Query.equal('blogid', id)
        ]);
        setComments(response.documents);
      } catch (error) {
        console.error('Failed to fetch comments', error);
      }
    };

    const fetchUser = async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };

    fetchBlog();
    fetchComments();
    fetchUser();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment) return;

    try {
      const comment = await databases.createDocument('database', 'comments', ID.unique(), {
        userid: user.$id,
        name: user.name,
        blogid: id,
        comment: newComment
      });

      setComments([...comments, comment]);
      setNewComment("");
    } catch (error) {
      console.error('Failed to submit comment', error);
    }
  };

  if (!blog) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-slate-100 text-white rounded-sm shadow-lg mt-12">
        <img src={blog.photo ? blog.photo : sampleImage} alt="Blog" className="w-full h-auto object-cover rounded-3xl mb-4" />
        <h1 className="text-5xl font-bold mb-8 mt-14 text-center text-gray-900">{blog.title}</h1>

        <div className="flex items-center justify-start mb-8 mt-14">
          <img src={writerImage} alt="Writer" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-grow">
            <hr className="border-gray-300 mb-2" />
            <h2 className="text-xl text-left text-gray-900">Anonymous Writer</h2>
            <hr className="border-gray-300 mt-2" />
          </div>
        </div>

        <div className="text-xl text-gray-800 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: blog.body }}></div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comments</h2>
          {user ? (
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <textarea
                className="w-full p-3 rounded-lg border border-gray-300 mb-4 text-gray-900"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-gray-400 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11V3m0 0a9 9 0 000 18v-6m0 6a9 9 0 010-18m-9 9h18"
                />
              </svg>
              <p className="text-gray-600 mb-4">Login to add a comment</p>
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Login
              </button>
            </div>
          )}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.$id} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <img src={writerImage} alt="User" className="w-8 h-8 rounded-full mr-2" />
                  <span className="text-gray-900 font-semibold">{comment.name}</span>
                </div>
                <p className="text-gray-800">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2 mt-20 text-center text-gray-900">Related Articles</h1>
      <RelatedBlogs />
      <div className="mt-16"></div>
      <Footer />
    </>
  );
};

export default BlogDetail;

