/* eslint-disable no-unused-vars */
// src/RedisDashboard.js
import React, { useState } from "react";
import axios from "axios";

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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">Redis Gist Deployment</h1>

      {/* Redis Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Deployments</h2>
          <p className="text-gray-700">Manage your Redis deployments and monitor their status.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Backups</h2>
          <p className="text-gray-700">Backup your Redis data for disaster recovery.</p>
        </div>
      </div>

      {/* Key-Value Data Section */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Data</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Enter Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleAddKeyValue}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Key-Value Pair
        </button>
      </div>

      {/* Display Stored Data */}
      {storedData && (
        <div className="bg-white p-6 shadow-md rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Stored Data</h2>
          <p>Key: {storedData.key}</p>
          <p>Value: {storedData.value}</p>
        </div>
      )}

      {/* Error Handling */}
      {error && (
        <div className="bg-red-200 p-4 rounded-lg text-red-800 mb-8">
          <p>{error}</p>
        </div>
      )}

      {/* Fetch Key-Value */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Get Key-Value</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Key to Fetch"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <button
          onClick={handleGetKeyValue}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Get Key-Value Pair
        </button>
      </div>
    </div>
  );
};

export default RedisDashboard;
