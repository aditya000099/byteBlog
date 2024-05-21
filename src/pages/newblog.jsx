import React, { useState } from "react";
import { Client, Databases, ID, Storage } from "appwrite";
import Header from "../components/header";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const CreateBlogPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagone, setTagone] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setTagone(e.target.value);
  };

  const handlePhotoChange = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error('No file selected.');
      return ''; // Return an empty string or handle the error as needed
    }
  
    const file = e.target.files[0];
    const storage = new Storage(client);
  
    try {
      // Upload photo to Appwrite storage
      const photoResponse = await storage.createFile("blogphotos", ID.unique(), file);
      console.log('Photo uploaded:', photoResponse);
  
      // Assuming photoResponse contains the file ID
      const photoId = photoResponse.$url;// Extract the file ID from the response
  
      // Return the file ID as a string
      console.log(photoId);
      return photoId; // Convert the file ID to a string
    } catch (error) {
      console.error('Error uploading photo:', error);
      return ''; // Return an empty string or handle the error as needed
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the photo ID from handlePhotoChange function
      const photoId = await handlePhotoChange(e);

      const post = await databases.createDocument(
        "database",
        "blogs",
        ID.unique(),
        { title: title, body: description, photo: photoId, tagone: tagone }
      );

      console.log("Blog post created:", post);
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <>
    <Header />
    <div className="max-w-xl mx-auto px-4 py-8 bg-slate-100  text-gray-900 rounded-lg  mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-slate-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-slate-100 text-gray-700 ocus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            rows="5"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Category:</label>
          <textarea
            value={tagone}
            onChange={handleCategoryChange}
            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-slate-100 text-gray-700 ocus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            rows="5"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Photo:</label>
          <input
            type="file"
            accept="image/*"
            id="uploader"
            onChange={handlePhotoChange}
            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-slate-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );

};

export default CreateBlogPost;
