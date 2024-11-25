import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for validation

const projects = [
  {
    name: "gist-deployments",
    url: "https://gist-deployments.gist.app",
    repo: "adityakaaltatva/GIST-major-IBM",
    branch: "master",
    status: "ok",
    updated: "4h ago",
  },
  {
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },
  {
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },{
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },{
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },{
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },{
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },{
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },{
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },{
    name: "access-cloud-blockchain",
    url: "https://access-cloud-blockchain.gist.app",
    repo: "adityakaaltatva/Access_cloud_df",
    branch: "master",
    status: "prod",
    updated: "3d ago",
  },
  // Additional projects...
];

const DropdownMenu = ({ onClose }) => (
  <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-gray-300 rounded-lg shadow-lg z-10 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
    <ul>
      <li
        className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        onClick={() => onClose("Add Favorite")}
      >
        Add Favorite
      </li>
      <li
        className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        onClick={() => onClose("View Logs")}
      >
        View Logs
      </li>
      <li
        className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        onClick={() => onClose("Manage Domains")}
      >
        Manage Domains
      </li>
      <li
        className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        onClick={() => onClose("Transfer Project")}
      >
        Transfer Project
      </li>
      <li
        className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        onClick={() => onClose("Settings")}
      >
        Settings
      </li>
    </ul>
  </div>
);

DropdownMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleDropdownAction = (action) => {
    console.log(`Selected: ${action}`);
    setDropdownIndex(null); // Close dropdown
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col">
      {/* Search Bar */}
      <div className="sticky top-0 z-20 bg-black p-4 shadow-md transition-all">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search Repositories and Projects..."
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring focus:ring-blue-400 transition-all"
          />
          <button
            onClick={() => navigate("/deploy")}
            className="ml-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add New
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            {/* Card Content */}
            <div>
              <h2 className="text-lg font-bold mb-1 text-white">{project.name}</h2>
              <p className="text-gray-400 mb-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {project.url}
                </a>
              </p>
              <p className="text-gray-400">
                <i className="fas fa-code-branch"></i> {project.branch}
              </p>
              <p className="text-gray-400">
                <i className="fas fa-clock"></i> {project.updated}
              </p>
              <p
                className={`mt-2 px-2 py-1 rounded-lg inline-block text-sm ${
                  project.status === "prod" ? "bg-green-500" : "bg-gray-500"
                }`}
              >
                {project.status}
              </p>
            </div>

            {/* 3-Dots Menu */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() =>
                  setDropdownIndex(dropdownIndex === index ? null : index)
                }
                className="text-gray-400 hover:text-white"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
              {dropdownIndex === index && (
                <DropdownMenu onClose={handleDropdownAction} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
