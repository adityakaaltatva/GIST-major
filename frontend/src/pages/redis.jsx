import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaDatabase, FaServer } from "react-icons/fa";

const RedisDashboard = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [storedData, setStoredData] = useState(null);
  const [error, setError] = useState(null);

  // Handle adding a key-value pair
  const handleAddKeyValue = async () => {
    try {
      const response = await axios.post("/api/add-key", { key, value });
      setStoredData({ key, value });
      setError(null);
    } catch (err) {
      setError("Failed to add key-value pair");
    }
  };

  // Handle fetching key-value pair
  const handleGetKeyValue = async () => {
    try {
      const response = await axios.get(`/api/get-key/${key}`);
      setStoredData({ key, value: response.data.value });
      setError(null);
    } catch (err) {
      setError("Failed to fetch key-value pair");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white font-sans">
      {/* Header Section */}
      <header className="w-full py-20 px-20 bg-gray-900 shadow-lg mb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 leading-tight drop-shadow-md animate-fade-in">
            Redis Gist Dashboard
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mt-6 max-w-lg mx-auto">
            Manage your Redis key-value pairs, backups, and deployments seamlessly.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <motion.div
        className="max-w-5xl mx-auto p-8 space-y-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Redis Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4">
              <FaServer size={36} className="text-purple-500" />
              <h2 className="text-xl font-bold text-gray-800">Deployments</h2>
            </div>
            <p className="text-gray-700 mt-2">Manage your Redis deployments and monitor their status.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4">
              <FaDatabase size={36} className="text-blue-500" />
              <h2 className="text-xl font-bold text-gray-800">Backups</h2>
            </div>
            <p className="text-gray-700 mt-2">Backup your Redis data for disaster recovery.</p>
          </div>
        </section>

        {/* Key-Value Data Section */}
        <section className="bg-white p-6 shadow-md rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Add Key-Value Pair</h2>
          <div className="mb-4 space-y-4">
            <input
              type="text"
              placeholder="Enter Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-2 focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Enter Value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-2 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            onClick={handleAddKeyValue}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add Key-Value Pair
          </button>
        </section>

        {/* Display Stored Data */}
        {storedData && (
          <section className="bg-white p-6 shadow-md rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Stored Data</h2>
            <p>Key: <span className="font-semibold text-gray-800">{storedData.key}</span></p>
            <p>Value: <span className="font-semibold text-gray-800">{storedData.value}</span></p>
          </section>
        )}

        {/* Error Handling */}
        {error && (
          <section className="bg-red-200 p-4 rounded-lg text-red-800 mb-8">
            <p>{error}</p>
          </section>
        )}

        {/* Fetch Key-Value Section */}
        <section className="bg-white p-6 shadow-md rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Get Key-Value</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Key to Fetch"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-2 focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            onClick={handleGetKeyValue}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Key-Value Pair
          </button>
        </section>
      </motion.div>
    </div>
  );
};

export default RedisDashboard;
