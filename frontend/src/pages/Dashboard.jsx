import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <div className="text-center text-2xl font-bold text-blue-400">
          Access<span className="text-white">Cloud</span>
        </div>
        <ul className="mt-8">
          <li>
            <Link to="/dashboard" className="block py-2 text-lg hover:bg-blue-400 transition-all rounded px-4">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/access-control" className="block py-2 text-lg hover:bg-blue-400 transition-all rounded px-4">
              Access Control
            </Link>
          </li>
          <li>
            <Link to="/file-management" className="block py-2 text-lg hover:bg-blue-400 transition-all rounded px-4">
              File Management
            </Link>
          </li>
          <li>
            <Link to="/logs" className="block py-2 text-lg hover:bg-blue-400 transition-all rounded px-4">
              Logs
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block py-2 text-lg hover:bg-blue-400 transition-all rounded px-4">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block py-2 text-lg hover:bg-blue-400 transition-all rounded px-4">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/logout" className="block py-2 text-lg text-red-500 hover:bg-red-600 hover:text-white transition-all rounded px-4">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-lg text-gray-500">Welcome to your dashboard</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-gray-700">Total Files</h2>
            <p className="text-3xl font-semibold text-blue-400">350</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-gray-700">Active Users</h2>
            <p className="text-3xl font-semibold text-blue-400">120</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-gray-700">Recent Logs</h2>
            <p className="text-3xl font-semibold text-blue-400">12</p>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-gray-700">Recent Activity</h2>
          <ul className="mt-4 space-y-4">
            <li className="border-b border-gray-300 py-2">
              <span className="font-semibold text-gray-800">John Doe</span> uploaded a file
            </li>
            <li className="border-b border-gray-300 py-2">
              <span className="font-semibold text-gray-800">Jane Smith</span> logged in
            </li>
            <li className="border-b border-gray-300 py-2">
              <span className="font-semibold text-gray-800">Admin</span> changed settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
