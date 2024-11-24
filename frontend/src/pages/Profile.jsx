import { useState, useEffect } from 'react';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Aditya Pandey',
    email: 'aditya.2314@example.com',
    bio: 'A passionate developer exploring the world of blockchain and web3 Ecosystem EcoDao.',
    profilePicture: 'https://avatars.githubusercontent.com/u/123004951?v=4',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  const handleUpdateProfile = () => {
    setUserProfile(editedProfile);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  useEffect(() => {
    // Any side effects or data fetching can be done here
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg space-y-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Your Profile</h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={userProfile.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
          />
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="text-xl text-gray-800 font-semibold">Name</label>
          {isEditing ? (
            <input
              type="text"
              value={editedProfile.name}
              onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
              className="w-full p-3 mt-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          ) : (
            <p className="text-lg text-gray-600 mt-2">{userProfile.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="text-xl text-gray-800 font-semibold">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={editedProfile.email}
              onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
              className="w-full p-3 mt-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          ) : (
            <p className="text-lg text-gray-600 mt-2">{userProfile.email}</p>
          )}
        </div>

        {/* Bio Field */}
        <div className="mb-6">
          <label className="text-xl text-gray-800 font-semibold">Bio</label>
          {isEditing ? (
            <textarea
              value={editedProfile.bio}
              onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
              className="w-full p-3 mt-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              rows="4"
            />
          ) : (
            <p className="text-lg text-gray-600 mt-2">{userProfile.bio}</p>
          )}
        </div>

        <div className="flex justify-between items-center">
          {isEditing ? (
            <button
              onClick={handleUpdateProfile}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
            >
              Edit Profile
            </button>
          )}

          {/* Logout Button */}
          <button
            onClick={() => alert('Logged out successfully!')}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
