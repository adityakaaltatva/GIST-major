import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeploymentNavbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">△</span>
          </div>

          <div>
            <p className="text-sm text-gray-400">adityakaaltatva's projects</p>
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="text-lg font-semibold text-white hover:text-purple-400 transition"
              >
                GIST
              </Link>
              <span className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-300">
                Hobby
              </span>
            </div>
          </div>
        </div>

        {/* Center Section: Navbar Links */}
        <ul className="flex items-center space-x-6 text-sm">
          <li>
            <Link to="/deployments" className="hover:text-gray-400 transition">
              Deployments
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="hover:text-gray-400 transition">
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/logs" className="hover:text-gray-400 transition">
              Logs
            </Link>
          </li>
          <li>
            <Link to="/observability" className="hover:text-gray-400 transition">
              Observability
            </Link>
          </li>
          <li>
            <Link to="/firewall" className="hover:text-gray-400 transition">
              Firewall
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-gray-400 transition">
              Settings
            </Link>
          </li>
        </ul>

        {/* Right Section: Actions and Profile */}
        <div className="flex items-center space-x-6">
          {/* Utility Links */}
          <ul className="flex items-center space-x-4 text-sm text-gray-400">
            <li>
              <Link to="/changelog" className="hover:text-gray-200 transition">
                Changelog
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-gray-200 transition">
                Help
              </Link>
            </li>
            <li>
              <Link to="/docs" className="hover:text-gray-200 transition">
                Docs
              </Link>
            </li>
          </ul>

          {/* Notifications */}
          <button
            className="text-gray-400 hover:text-gray-200 transition focus:outline-none"
            title="Notifications"
          >
            <FaBell className="text-lg" />
          </button>

          {/* Profile Picture */}
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default DeploymentNavbar;
