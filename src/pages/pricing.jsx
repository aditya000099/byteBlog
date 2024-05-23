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
          <div class="container2 items-center flex justify-center ml-6">
          <style>{`.container2 {
    background-color: #ffffff;
    display: flex;
    width: 230px; /* Reduced from 460px */
    height: 60px; /* Reduced from 120px */
    position: relative;
    border-radius: 6px;
    transition: 0.3s ease-in-out;
  }
  
  .container2:hover {
    transform: scale(1.03);
    width: 110px; /* Reduced from 220px */
  }
  
  .container2:hover .left-side {
    width: 100%;
  }
  
  .left-side {
    background-color: #5de2a3;
    width: 65px; /* Reduced from 130px */
    height: 60px; /* Reduced from 120px */
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    flex-shrink: 0;
    overflow: hidden;
  }
  
  .right-side {
    width: calc(100% - 65px); /* Adjusted for new width */
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }
  
  .right-side:hover {
    background-color: #f9f7f9;
  }
  
  .arrow {
    width: 10px; /* Reduced from 20px */
    height: 10px; /* Reduced from 20px */
    margin-right: 10px; /* Reduced from 20px */
  }
  
  .new {
    font-size: 18px; /* Reduced from 23px */
    font-family: "Lexend Deca", sans-serif;
    margin-left: 10px; /* Reduced from 20px */
  }
  
  .card {
    width: 35px; /* Reduced from 70px */
    height: 23px; /* Reduced from 46px */
    background-color: #c7ffbc;
    border-radius: 6px;
    position: absolute;
    display: flex;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 4.5px 4.5px 4.5px -1px rgba(77, 200, 143, 0.72);
    -moz-box-shadow: 4.5px 4.5px 4.5px -1px rgba(77, 200, 143, 0.72);
    -webkit-box-shadow: 4.5px 4.5px 4.5px -1px rgba(77, 200, 143, 0.72);
  }
  
  .card-line {
    width: 32.5px; /* Reduced from 65px */
    height: 6.5px; /* Reduced from 13px */
    background-color: #80ea69;
    border-radius: 2px;
    margin-top: 3.5px; /* Reduced from 7px */
  }
  
  @media only screen and (max-width: 480px) {
    .container2 {
      transform: scale(0.7);
    }
  
    .container2:hover {
      transform: scale(0.74);
    }
  
    .new {
      font-size: 9px; /* Reduced from 18px */
    }
  }
  
  .buttons {
    width: 4px; /* Reduced from 8px */
    height: 4px; /* Reduced from 8px */
    background-color: #379e1f;
    box-shadow: 0 -5px 0 0 #26850e, 0 5px 0 0 #56be3e;
    border-radius: 50%;
    margin-top: 2.5px; /* Reduced from 5px */
    transform: rotate(90deg);
    margin: 5px 0 0 -15px; /* Reduced from 10px 0 0 -30px */
  }
  
  .container2:hover .card {
    animation: slide-top 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) both;
  }
  
  .container2:hover .post {
    animation: slide-post 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
  
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  
    50% {
      -webkit-transform: translateY(-35px) rotate(90deg); /* Reduced from -70px */
      transform: translateY(-35px) rotate(90deg);
    }
  
    60% {
      -webkit-transform: translateY(-35px) rotate(90deg); /* Reduced from -70px */
      transform: translateY(-35px) rotate(90deg);
    }
  
    100% {
      -webkit-transform: translateY(-4px) rotate(90deg); /* Reduced from -8px */
      transform: translateY(-4px) rotate(90deg);
    }
  }
  
  .post {
    width: 31.5px; /* Reduced from 63px */
    height: 37.5px; /* Reduced from 75px */
    background-color: #dddde0;
    position: absolute;
    z-index: 11;
    bottom: 5px; /* Reduced from 10px */
    top: 60px; /* Reduced from 120px */
    border-radius: 6px;
    overflow: hidden;
  }
  
  .post-line {
    width: 23.5px; /* Reduced from 47px */
    height: 4.5px; /* Reduced from 9px */
    background-color: #545354;
    position: absolute;
    border-radius: 0px 0px 3px 3px;
    right: 4px; /* Reduced from 8px */
    top: 4px; /* Reduced from 8px */
  }
  
  .post-line:before {
    content: "";
    position: absolute;
    width: 23.5px; /* Reduced from 47px */
    height: 4.5px; /* Reduced from 9px */
    background-color: #757375;
    top: -4px; /* Reduced from -8px */
  }
  
  .screen {
    width: 23.5px; /* Reduced from 47px */
    height: 11.5px; /* Reduced from 23px */
    background-color: #ffffff;
    position: absolute;
    top: 11px; /* Reduced from 22px */
    right: 4px; /* Reduced from 8px */
    border-radius: 3px;
  }
  
  .numbers {
    width: 6px; /* Reduced from 12px */
    height: 6px; /* Reduced from 12px */
    background-color: #838183;
    box-shadow: 0 -9px 0 0 #838183, 0 9px 0 0 #838183;
    border-radius: 2px;
    position: absolute;
    transform: rotate(90deg);
    left: 12.5px; /* Reduced from 25px */
    top: 26px; /* Reduced from 52px */
  }
  
  .numbers-line2 {
    width: 6px; /* Reduced from 12px */
    height: 6px; /* Reduced from 12px */
    background-color: #aaa9ab;
    box-shadow: 0 -9px 0 0 #aaa9ab, 0 9px 0 0 #aaa9ab;
    border-radius: 2px;
    position: absolute;
    transform: rotate(90deg);
    left: 12.5px; /* Reduced from 25px */
    top: 34px; /* Reduced from 68px */
  }
  
  @keyframes slide-post {
    50% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  
    100% {
      -webkit-transform: translateY(-35px); /* Reduced from -70px */
      transform: translateY(-35px);
    }
  }
  
  .dollar {
    position: absolute;
    font-size: 8px; /* Reduced from 16px */
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    left: 0;
    top: 0;
    color: #4b953b;
    text-align: center;
  }
  
  .container2:hover .dollar {
    animation: fade-in-fwd 0.3s 1s backwards;
  }
  
  @keyframes fade-in-fwd {
    0% {
      opacity: 0;
      transform: translateY(-2.5px); /* Reduced from -5px */
    }
  
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  `}</style>
 <div class="left-side">
  <div class="card">
   <div class="card-line"></div>
   <div class="buttons"></div>
  </div>
  <div class="post">
   <div class="post-line"></div>
   <div class="screen">
    <div class="dollar">$</div>
   </div>
   <div class="numbers"></div>
   <div class="numbers-line2"></div>
  </div>
 </div>
 <div class="right-side">
  <div class="new font-bold text-lg">Get Pro</div>
  
   <svg viewBox="0 0 451.846 451.847" height="512" width="512" xmlns="http://www.w3.org/2000/svg" class="arrow"><path fill="#cfcfcf" data-old_color="#000000" class="active-path" data-original="#000000" d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"></path></svg>
 
 </div>
</div>
            {/* <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PricingPage;
