import React from 'react';
import TimeFinderLogo from './TimeFinderLogo';
import { Link } from 'react-router-dom';


const StartScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TimeFinderLogo />
      <h2 className="text-3xl font-bold mb-4">Welcome to Your Time Finder</h2>
      <p className="text-lg mb-4">
        Where finding the right time for the right task is done for you.
      </p>
      {/* MAke sure to put a src in the imgae tag before alt, should be the time finder logo image link */}
      <img alt="TimeFinder Image" className="w-64 h-auto mb-4" />
      <p className="text-lg mb-4">
        Time Finder helps you schedule your tasks to get them done by matching open times to your productivity and peak concentration increasing your success!
      </p>
      <button className="px-6 py-3 bg-blue-500 rounded-full text-white font-bold text-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
       <Link to="/Tasks">Get Started</Link>
      </button>
      <h3 className="text-xl font-bold mt-4">Already have and account? Sign in here.</h3>
      <div className="flex flex-col mt-2">
        <input type="text" className="border border-gray-400 rounded-md p-2 mb-2" placeholder="Enter your name" />
        <input type="text" className="border border-gray-400 rounded-md p-2" placeholder="Enter your email" />
      </div>
    </div>
  );
};

export default StartScreen;

