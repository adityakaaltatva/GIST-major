// Logs.js

import  { useState } from 'react';

const Logs = () => {
  const [search, setSearch] = useState('');
  const logs = [
    { id: 1, time: '2024-11-14 10:00 AM', event: 'User login', status: 'Success' },
    { id: 2, time: '2024-11-14 11:00 AM', event: 'File uploaded', status: 'Success' },
    { id: 3, time: '2024-11-14 12:30 PM', event: 'Access attempt', status: 'Failed' },
    { id: 4, time: '2024-11-14 02:00 PM', event: 'Password change', status: 'Success' },
  ];

  const filteredLogs = logs.filter((log) =>
    log.event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Logs</h2>
        
        {/* Search Bar */}
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
            placeholder="Search logs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Logs Table */}
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Event</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td className="py-2 px-4">{log.time}</td>
                  <td className="py-2 px-4">{log.event}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`py-1 px-3 rounded-full text-white ${
                        log.status === 'Success' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-2 px-4 text-center text-gray-500">
                  No logs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logs;
