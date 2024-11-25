import  { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { FaHome, FaBook, FaQuestionCircle, FaBlog, FaTags, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <footer
      className={`w-screen p-6 transition-all duration-300 ease-in-out ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-center items-center py-4">
        <div
          className={`relative flex items-center w-16 h-8 rounded-full cursor-pointer p-1 ${
            darkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
          onClick={toggleTheme}
          role="button"
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          tabIndex={0}
        >
          <div
            className={`absolute left-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
              darkMode
                ? "translate-x-0 bg-yellow-500"
                : "translate-x-8 bg-blue-500"
            }`}
          >
            {darkMode ? (
              <MoonIcon className="w-4 h-4 text-white" />
            ) : (
              <SunIcon className="w-4 h-4 text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {/* Menu Section */}
        <div>
          <h2 className="text-lg font-semibold pb-2 underline text-white">Menu</h2>
          <ul>
            <li className="py-1">
              <a href="#home" className="hover:text-blue-500 flex items-center justify-center">
                <FaHome className="mr-2" /> Home
              </a>
            </li>
            <li className="py-1">
              <a href="#docs" className="hover:text-blue-500 flex items-center justify-center">
                <FaBook className="mr-2" /> Documentation
              </a>
            </li>
            <li className="py-1">
              <a href="#guides" className="hover:text-blue-500 flex items-center justify-center">
                <FaBook className="mr-2" /> Guides
              </a>
            </li>
          </ul>
        </div>


        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold pb-2 underline text-white">Help</h2>
          <ul>
            <li className="py-1">
              <a href="#help" className="hover:text-blue-500 flex items-center justify-center">
                <FaQuestionCircle className="mr-2" /> Help
              </a>
            </li>
            <li className="py-1">
              <a href="#sales" className="hover:text-blue-500 flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> Contact Sales
              </a>
            </li>
            <li className="py-1">
              <a href="#blog" className="hover:text-blue-500 flex items-center justify-center">
                <FaBlog className="mr-2" /> Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-lg font-semibold pb-2 underline text-white">Resources</h2>
          <ul>
            <li className="py-1">
              <a href="#changelog" className="hover:text-blue-500 flex items-center justify-center">
                <FaTags className="mr-2" /> Changelog
              </a>
            </li>
            <li className="py-1">
              <a href="#pricing" className="hover:text-blue-500 flex items-center justify-center">
                <FaTags className="mr-2" /> Pricing
              </a>
            </li>
            <li className="py-1">
              <a href="#enterprise" className="hover:text-blue-500 flex items-center justify-center">
                <FaTags className="mr-2" /> Enterprise
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-6 py-6">
        <a href="https://facebook.com" className="text-white hover:text-blue-600">
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" className="text-white hover:text-blue-400">
          <FaTwitter className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" className="text-white hover:text-blue-500">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" className="text-white hover:text-pink-500">
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-6 text-sm">
        <p>© {new Date().getFullYear()}</p>
        <p>
          Developed by{" "}
          <span className="font-bold text-blue-500">AdityaKaaltatva</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
