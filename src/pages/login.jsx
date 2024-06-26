import React, { useState, useEffect } from "react";
import { Client, Databases, ID, Storage, Account } from "appwrite";
import Header from "../components/header";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6643380c00076d57eba2");

const databases = new Databases(client);

const storage = new Storage(client);

const account = new Account(client);
// import { account } from '../appwriteConfig';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.getSession("current");
        window.location.href = "/"; // Redirect to dashboard if logged in
      } catch {
        // No session found, stay on login page
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const session = await account.createEmailPasswordSession(email, password);
      localStorage.setItem("userSession", JSON.stringify(session));
      window.location.href = "/dashboard"; // Redirect to dashboard
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    window.location.href = "/signup";
  };

  return (
    <>
      <Header />

      <div className="flex items-center justify-center min-h-screen bg-slate-100 text-gray-800">
        <div className="bg-slate-100 p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
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
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
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
              Login
            </button>
            <p className="text-gray-600 mt-8 text-sm">
              Don't have an account?{" "}
              <span
                onClick={handleSignUp}
                className="text-purple-500 cursor-pointer"
              >
                Signup Here
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
