import  { useState } from 'react';
//No more use of it
const Settings = () => {
  const [activeSection, setActiveSection] = useState('general');

  const sections = {
    general: (
      <div className="p-6">
        <h3 className="text-2xl text-white font-semibold mb-4">General Settings</h3>
        <p className="text-gray-400">Here you can change your general settings.</p>
      </div>
    ),
    billing: (
      <div className="p-6">
        <h3 className="text-2xl text-white font-semibold mb-4">Billing Settings</h3>
        <p className="text-gray-400">Here you can manage your billing details.</p>
      </div>
    ),
    security: (
      <div className="p-6">
        <h3 className="text-2xl text-white font-semibold mb-4">Security & Privacy</h3>
        <p className="text-gray-400">Manage your security and privacy settings here.</p>
      </div>
    ),
    notifications: (
      <div className="p-6">
        <h3 className="text-2xl text-white font-semibold mb-4">Notifications Settings</h3>
        <p className="text-gray-400">Adjust your notification preferences.</p>
      </div>
    ),
    avatar: (
      <div className="p-6">
        <h3 className="text-2xl text-white font-semibold mb-4">Avatar Settings</h3>
        <p className="text-gray-400">Change your profile avatar here.</p>
      </div>
    ),
  };

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 space-y-6 fixed top-2 left-0 h-full shadow-lg ">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Gist Settings</h2>
        <div className="space-y-4">
          <button
            onClick={() => setActiveSection('general')}
            className="w-full text-left p-3 rounded-md hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            General
          </button>
          <button
            onClick={() => setActiveSection('billing')}
            className="w-full text-left p-3 rounded-md hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            Billing
          </button>
          <button
            onClick={() => setActiveSection('security')}
            className="w-full text-left p-3 rounded-md hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            Security & Privacy
          </button>
          <button
            onClick={() => setActiveSection('notifications')}
            className="w-full text-left p-3 rounded-md hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveSection('avatar')}
            className="w-full text-left p-3 rounded-md hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            Avatar
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-900 p-8 ml-64 overflow-auto h-full">
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default Settings;
