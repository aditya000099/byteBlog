import React, { useState } from 'react';

const SubscribeSection = () => {
    const [email, setEmail] = useState('');
  
    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any action with the collected email, such as sending it to a backend server
      console.log('Submitted email:', email);
      // Reset the input field after submission
      setEmail('');
    };
  
    return (
        <div className="flex justify-center pb-24 pt-12 bg-slate-100"> {/* Center the content */}
          <div className="mt-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Subscribe to Our Weekly Newsletter</h2>
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                required
              />
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
    );
  };

export default SubscribeSection