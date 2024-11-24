import  { useState } from 'react';
import { Link } from 'react-router-dom';

const AccessControl = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'Editor' },
    { id: 3, name: 'Bob Johnson', role: 'Viewer' },
  ]);
  
  const [selectedRole, setSelectedRole] = useState('Admin');
  const [newUserName, setNewUserName] = useState('');

  // Handle adding new user (this is just a mock-up, ideally, you'd use a backend for persistence)
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      role: selectedRole,
    };
    setUsers([...users, newUser]);
    setNewUserName('');
  };

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
            <Link to="/access-control" className="block py-2 text-lg text-blue-400 hover:bg-blue-400 transition-all rounded px-4">
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
          <h1 className="text-3xl font-semibold text-gray-800">Access Control</h1>
          <p className="text-lg text-gray-500">Manage user roles and permissions</p>
        </div>

        {/* User Management */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-medium text-gray-700">User Access Management</h2>
          <table className="w-full mt-4 table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Role</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-500 transition-all">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New User Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-gray-700">Add New User</h2>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="role">Role</label>
              <select
                id="role"
                className="mt-1 block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleAddUser}
              className="w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-all"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccessControl;
