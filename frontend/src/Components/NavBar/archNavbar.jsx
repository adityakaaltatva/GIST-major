import React from 'react';
import { Link } from 'react-router-dom';

const ArchNavbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4">
      {/* Left Side */}
      <div className="text-xl font-semibold">
        <Link to="/" className="text-white text-2xl font-extrabold">
          GIST Deployments
        </Link>
      </div>

      {/* Right Side */}
      <ul className="flex space-x-6 text-sm">
        <li>
          <Link to="/architecture" className="hover:text-gray-400">Architecture</Link>
        </li>
        <li>
          <Link to="/observability" className="hover:text-gray-400">Observability</Link>
        </li>
        <li>
          <Link to="/logs" className="hover:text-gray-400">Logs</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-gray-400">Settings</Link>
        </li>
        <li>
          <Link to="/share" className="hover:text-gray-400">Share</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ArchNavbar;
