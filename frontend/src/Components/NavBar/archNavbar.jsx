import React from 'react';

const ArchNavbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4 rounded-b-lg shadow-lg">
      {/* Left Side */}
      <div className="text-xl font-semibold tracking-wide">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">GIST</span> Deployments
      </div>

      {/* Right Side */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Architecture</li>
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Observability</li>
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Logs</li>
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Settings</li>
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Share</li>
      </ul>
    </nav>
  );
};

export default ArchNavbar;
