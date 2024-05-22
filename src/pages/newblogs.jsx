// // CreateBlogPost.jsx
// import React, { useState } from 'react';
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
// import Placeholder from '@tiptap/extension-placeholder';
// import { lowlight } from 'lowlight/lib/core'; // Correct import path for lowlight
// import { Client, Databases, ID } from 'appwrite';
// import Header from '../components/header';

// const client = new Client()
//   .setEndpoint('https://cloud.appwrite.io/v1')
//   .setProject('YOUR_PROJECT_ID');

// const databases = new Databases(client);

// const CreateBlogPosts = () => {
//   const [title, setTitle] = useState('');
//   const [tagone, setTagone] = useState('');

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       CodeBlockLowlight.configure({
//         lowlight,
//       }),
//       Placeholder.configure({
//         placeholder: 'Write your blog content here...',
//       }),
//     ],
//     content: '',
//   });

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setTagone(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const htmlContent = editor.getHTML();

//     try {
//       const post = await databases.createDocument('database', 'blogs', ID.unique(), {
//         title: title,
//         body: htmlContent,
//         tagone: tagone,
//       });

//       console.log('Blog post created:', post);
//       // Redirect to /dashboard after successful post creation
//       window.location.href = '/dashboard';
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="max-w-xl mx-auto px-4 py-8 bg-slate-100 text-gray-900 rounded-lg mt-20">
//         <h1 className="text-3xl font-bold mb-6 text-center">Create Blog Post</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-medium">Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={handleTitleChange}
//               className="w-full border border-gray-600 rounded-md py-2 px-4 bg-slate-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-medium">Category:</label>
//             <textarea
//               value={tagone}
//               onChange={handleCategoryChange}
//               className="w-full border border-gray-600 rounded-md py-2 px-4 bg-slate-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               rows="1"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-medium">Body:</label>
//             <div className="border border-gray-600 rounded-md p-4 bg-slate-100">
//               <div className="flex mb-2">
//                 <button
//                   type="button"
//                   className="mr-2 px-2 py-1 bg-gray-200 rounded"
//                   onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//                 >
//                   H1
//                 </button>
//                 <button
//                   type="button"
//                   className="mr-2 px-2 py-1 bg-gray-200 rounded"
//                   onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//                 >
//                   H2
//                 </button>
//                 <button
//                   type="button"
//                   className="mr-2 px-2 py-1 bg-gray-200 rounded"
//                   onClick={() => editor.chain().focus().toggleBold().run()}
//                 >
//                   Bold
//                 </button>
//                 <button
//                   type="button"
//                   className="mr-2 px-2 py-1 bg-gray-200 rounded"
//                   onClick={() => editor.chain().focus().toggleItalic().run()}
//                 >
//                   Italic
//                 </button>
//                 <button
//                   type="button"
//                   className="mr-2 px-2 py-1 bg-gray-200 rounded"
//                   onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//                 >
//                   Code
//                 </button>
//               </div>
//               <EditorContent editor={editor} />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateBlogPosts;
