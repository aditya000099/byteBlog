import React, { useState } from 'react';
import { Client, Databases, ID, Storage, Account } from "appwrite";
import Header from '../components/header';

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await account.create('unique()', email, password, name).then((response) => {
                const post = databases.createDocument(
                    "database",
                    "users",
                    response.$id,
                    { name: name, email: email, id: response.$id}
                  );
            
                  console.log("User created:", post);
                console.log('Signup successful! Please login.');
            });
            alert('Signup successful! Please login.');
        } catch (error) {
            console.error(error);
            alert('Signup failed');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        window.location.href = "/login";
      };

    return (
        <>
        <Header /> 
        <div className="flex items-center justify-center min-h-screen bg-slate-100 text-gray-800">
            <div className="bg-slate-100 p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-purple-700"
                    >
                        Signup
                    </button>
                    <p className="text-gray-600 mt-8 text-sm">
              Already have an account?{" "}
              <span
                onClick={handleLogin}
                className="text-purple-500 cursor-pointer"
              >
                Login Here
              </span>
            </p>
                </form>
            </div>
        </div>
        </>
    );
};

export default Signup;
