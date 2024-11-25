import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const project = {
  name: "gist-deployments",
  url: "https://gist-deployments.gist.app",
  repo: "adityakaaltatva/GIST-major-IBM",
  branch: "master",
  status: "ok",
  updated: "1minute ago",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownAction = (action) => {
    console.log(`Selected: ${action}`);
    setDropdownOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-100 overflow-hidden">
      {/* Header */}
      <header className="py-6 text-center border-b border-gray-700 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-100 animate-bounce">
          GIST Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Manage deployments securely and efficiently.
        </p>
      </header>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-6 py-10 flex flex-col space-y-10">
        {/* Search and Add New */}
        <div className="flex justify-between items-center animate-slide-in">
          <div className="w-full max-w-3xl">
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search Repositories and Projects..."
                className="w-full px-4 py-3 bg-gray-850 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
              />
              <button
                onClick={() => navigate("/deploy")}
                className="px-6 py-3 bg-gray-700 text-gray-200 hover:bg-gray-600 transition-all hover:animate-pulse"
              >
                Add New
              </button>
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {/* Project Card */}
          <div className="bg-gray-850 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-gray-100">{project.name}</h2>
            <p className="text-gray-400 mb-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300"
              >
                {project.url}
              </a>
            </p>
            <p className="text-gray-400">
              <span className="font-medium">Branch:</span> {project.branch}
            </p>
            <p className="text-gray-400">
              <span className="font-medium">Last Updated:</span>{" "}
              {project.updated}
            </p>
            <p
              className={`mt-4 inline-block px-3 py-1 text-sm font-medium rounded-full ${
                project.status === "ok"
                  ? "bg-green-600 text-white"
                  : "bg-gray-600"
              }`}
            >
              {project.status}
            </p>
          </div>
        </div>

        {/* Placeholder for More Projects */}
        <div className="text-center mt-6">
          <p className="text-gray-500 animate-fade-in">No more projects to display.</p>
          <button
            onClick={() => navigate("/deploy")}
            className="mt-4 px-6 py-3 bg-gray-700 text-gray-200 font-medium rounded-lg hover:bg-gray-600 transition-all hover:animate-pulse"
          >
            Deploy a New Project
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-700 text-center text-gray-500 animate-fade-in">
        <p>&copy; {new Date().getFullYear()} GIST Deployments. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
