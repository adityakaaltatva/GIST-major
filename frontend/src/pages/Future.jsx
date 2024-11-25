import React from "react";
import { FaHandsHelping, FaRegClock } from "react-icons/fa";
import Footer from "../Components/Footerdiv/Footer";
import ArchNavbar from "../Components/NavBar/archNavbar";

export const Future = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <ArchNavbar />

      {/* Main Content Section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center py-16 px-8">
        <FaRegClock size={100} className="text-blue-400 mb-6 animate-pulse" />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-400 mb-4">
          This service will be available in the future. Stay tuned for updates!
        </p>
        <p className="text-sm text-gray-500 mb-8">
          We’re working hard to bring you the best experience possible.
        </p>

        {/* Contribution Section */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg w-full">
          <FaHandsHelping size={40} className="text-green-500 mb-4" />
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-4">
            Gist Needs Your Help!
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Your small contribution could bring smiles to many developers. As the architecture of Gist grows, we need support to keep evolving and providing great experiences.
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Help us make Gist better for the community. Your generosity helps us continue building tools that empower developers worldwide.
          </p>
          <button
            onClick={() => window.location.href = "/sponsor"}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all"
          >
            Contribute & Support Gist
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Future;
