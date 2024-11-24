import React, { useState } from 'react';

const Logout = () => {
  const [isConnected, setIsConnected] = useState(false);

  const checkMetaMaskConnection = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
        alert('Your wallet is not connected. Please connect MetaMask.');
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
  };

  const handleLogout = async () => {
    if (isConnected) {
      try {
        // MetaMask doesn't have a direct "logout" method, but we can trigger a disconnection
        // One way to do this is to clear the session state or reset user data.
        // For demonstration, we'll assume "disconnect" means clearing session data or redirecting to a login screen.
        
        // Reset the user's session, localStorage, or other states here
        alert('You have logged out successfully!');
        
        // Optionally, you can also prompt MetaMask to disconnect, which requires handling session disconnection or simply resetting state.

        // Clear session or localStorage (if applicable)
        localStorage.clear();  // Example: clear stored session data

        // Update state for logged-out status
        setIsConnected(false);
      } catch (error) {
        console.error('Error logging out:', error);
      }
    } else {
      alert('You are not connected to a wallet.');
    }
  };

  // Run the check when the component mounts
  React.useEffect(() => {
    checkMetaMaskConnection();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        {isConnected ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-700">Logout</h2>
            <p className="text-lg text-gray-500 mb-4">You are connected with MetaMask.</p>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Logout</h2>
            <p className="text-lg text-gray-500">You are not connected to MetaMask.</p>
            <button
              onClick={checkMetaMaskConnection}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all mt-4"
            >
              Check Connection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;
