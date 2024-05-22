import React from 'react';
import Header from '../components/header';

const PricingPage = () => {
  return (
    <>
        <Header />
    
    <div className="bg-slate-100 text-gray-800 min-h-screen mt-1">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center mt-32">Pricing</h1>
        <div className="max-w-lg w-1/4 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold">$9/Month</h2>
              <p className="text-gray-600">Pro Plan</p>
            </div>
            <ul className="text-left">
              <li className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 10l5 5m0 0l5-5m-5 5V3"
                  />
                </svg>
                Browse Ad free
              </li>
              <li className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 10l5 5m0 0l5-5m-5 5V3"
                  />
                </svg>
                No Paywalls
              </li>
              <li className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 10l5 5m0 0l5-5m-5 5V3"
                  />
                </svg>
                10 free premium articles
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 px-6 py-4">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PricingPage;
