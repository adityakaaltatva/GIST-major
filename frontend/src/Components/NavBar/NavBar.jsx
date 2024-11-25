import  { useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubLogin from './GitHubLogin'; //

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navbar w-screen fixed top-0 left-0 z-50 flex justify-between items-center py-4 px-8 bg-gray-800 shadow-lg text-white">
            <Link to="/">
                <div className="logoDiv flex items-center gap-2">
                    <h1 className="logo text-2xl font-bold text-blue-400 tracking-wider">
                        GIST
                    </h1>
                </div>
            </Link>

            <div className="hidden md:flex gap-8 items-center">
                <Link to="/dashboard">
                    <li className="menuList list-none text-lg font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Dashboard
                    </li>
                </Link>
                <Link to="/access-control">
                    <li className="menuList list-none text-lg font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Access Control
                    </li>
                </Link>
                <Link to="/settings">
                    <li className="menuList list-none text-lg font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Settings
                    </li>
                </Link>
                <Link to="/profile">
                    <li className="menuList list-none text-lg font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Profile
                    </li>
                </Link>
                <Link to="/Blog">
                    <li className="menuList list-none text-lg font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Blog
                    </li>
                </Link>
                <Link to="/pricing">
                    <li className="menuList list-none text-lg font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Pricing
                    </li>
                </Link>

                <div className="ml-4">
                    <GitHubLogin />
                </div>
            </div>

            <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-screen bg-gray-800 shadow-lg md:hidden flex flex-col gap-6 py-6 px-6">
                    <Link to="/dashboard">
                        <li className="menuList list-none text-lg font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/access-control">
                        <li className="menuList list-none text-lg font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Access Control
                        </li>
                    </Link>
                    <Link to="/settings">
                        <li className="menuList list-none text-lg font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Settings
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li className="menuList list-none text-lg font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Profile
                        </li>
                    </Link>

                    <div className="flex justify-center mt-4">
                        <GitHubLogin />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
