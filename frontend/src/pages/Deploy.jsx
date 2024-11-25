import React from "react";
import { FaCubes, FaGithub, FaLeaf } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostgresql, SiRedis } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footerdiv/Footer";
import ArchNavbar from "../Components/NavBar/archNavbar";

const Deploy = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <ArchNavbar />

      {/* Header Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl">
        🚀<span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">New Project</span>  
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Gist Deploys your app to production effortlessly
          </span>
        </p>
      </div>

      {/* Main Options Section */}
      <div className="flex-grow flex flex-col items-center space-y-8">
        <p className="text-2xl text-gray-300">What can we help with?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-screen-md w-full">
          <button
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all transform flex flex-col items-center"
            onClick={() => handleRedirect("/deploy-git")}
          >
            <FaGithub size={40} className="text-purple-500 mb-4" />
            Deploy from GitHub Repo
          </button>

          <button
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all transform flex flex-col items-center"
            onClick={() => handleRedirect("/future")}
          >
            <FaCubes size={40} className="text-green-500 mb-4" />
            Deploy a Template
          </button>

          <button
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all transform flex flex-col items-center"
            onClick={() => handleRedirect("/future")}
          >
            <SiPostgresql size={40} className="text-blue-500 mb-4" />
            Deploy PostgreSQL
          </button>

          <button
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all transform flex flex-col items-center"
            onClick={() => handleRedirect("/redis")}
          >
            <SiRedis size={40} className="text-red-500 mb-4" />
            Deploy Redis
          </button>

          <button
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all transform flex flex-col items-center"
            onClick={() => handleRedirect("/future")}
          >
            <SiMongodb size={40} className="text-green-500 mb-4" />
            Deploy MongoDB
          </button>

          <button
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all transform flex flex-col items-center"
            onClick={() => handleRedirect("/future")}
          >
            <SiMysql size={40} className="text-orange-500 mb-4" />
            Deploy MySQL
          </button>

          <button
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all transform flex flex-col items-center"
            onClick={() => handleRedirect("/future")}
          >
            <FaLeaf size={40} className="text-yellow-500 mb-4" />
            Empty Project
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Deploy;
