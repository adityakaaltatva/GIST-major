import { useState } from "react";
import { AiFillGithub } from "react-icons/ai"; // GitLab icon
import { FaCheckCircle, FaGithub, FaGoogle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [isGithubAuthorized, setIsGithubAuthorized] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setIsGithubLoading(false);
    setIsGithubAuthorized(false);
  };

  const handleGithubLogin = () => {
    setIsGithubLoading(true);

    // Simulate a delay for the login process
    setTimeout(() => {
      setIsGithubLoading(false);
      setIsGithubAuthorized(true);
      alert("You are now connected to your GitHub account!"); // Alert upon successful connection
    }, 3000); // 3 seconds for the animation
  };

  return (
    <div className="navbar w-screen fixed top-0 left-0 z-50 flex justify-between items-center py-4 px-8 bg-gray-800 shadow-lg text-white">
      {/* Logo with GIST Text */}
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-4xl font-bold text-blue-400 tracking-wider">
          GIST
        </h1>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        <button
          onClick={toggleLoginModal}
          className="text-lg font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer"
        >
          Login
        </button>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/access-control" className="nav-link">Access Control</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-screen bg-gray-800 shadow-lg md:hidden flex flex-col gap-6 py-6 px-6">
          <button onClick={toggleLoginModal} className="text-lg font-medium text-white hover:text-blue-400">
            Login
          </button>
          <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
          <Link to="/access-control" className="nav-link text-white">Access Control</Link>
          <Link to="/settings" className="nav-link text-white">Settings</Link>
          <Link to="/profile" className="nav-link text-white">Profile</Link>
          <Link to="/blog" className="nav-link text-white">Blog</Link>
          <Link to="/pricing" className="nav-link text-white">Pricing</Link>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeLoginModal}>
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={closeLoginModal}>
              &times;
            </button>

            {/* Modal Content with GIST Text */}
            <div className="flex justify-center mb-6">
              <h2 className="text-3xl font-bold text-blue-400">GIST</h2>
            </div>

            {/* GitHub Login Button */}
            {!isGithubLoading && !isGithubAuthorized && (
              <button
                className="w-full py-3 bg-gray-700 hover:bg-gray-800 rounded text-white font-medium mb-4"
                onClick={handleGithubLogin}
              >
                <FaGithub className="mr-2 inline" /> Login with GitHub
              </button>
            )}

            {/* Loading Circle Animation */}
            {isGithubLoading && (
              <div className="w-full py-3 bg-gray-700 rounded text-white font-medium mb-4 relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-spin rounded-full border-4 border-t-4 border-gray-500 border-t-blue-400 w-8 h-8"></div>
                </div>
                <span className="opacity-0">Loading...</span>
              </div>
            )}

            {/* Authorized Message */}
            {isGithubAuthorized && (
              <div className="w-full py-3 bg-gray-700 rounded text-white font-medium mb-4 flex items-center justify-center">
                <FaCheckCircle className="mr-2 text-green-500" />
                <span>Connected with GitHub: <strong>adityakaaltatva</strong></span>
              </div>
            )}

            {/* Email, Google, and GitLab Login Buttons */}
            <button className="w-full py-3 bg-gray-700 hover:bg-gray-800 rounded text-white font-medium mb-4 flex items-center justify-center">
              <FiMail className="mr-2 inline" /> Email
            </button>
            <button className="w-full py-3 bg-gray-700 hover:bg-gray-800 rounded text-white font-medium mb-4 flex items-center justify-center">
              <FaGoogle className="mr-2 inline" /> Google
            </button>
            <button className="w-full py-3 bg-gray-700 hover:bg-gray-800 rounded text-white font-medium mb-4 flex items-center justify-center">
              <AiFillGithub className="mr-2 inline" /> GitLab
            </button>

            <button className="w-full py-3 bg-gray-700 hover:bg-gray-800 rounded text-white font-medium mt-4" onClick={closeLoginModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
