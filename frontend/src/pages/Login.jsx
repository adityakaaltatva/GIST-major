import React, { useState } from "react";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-gray-800 shadow-md py-4 px-6 flex justify-end">
                <button
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                    onClick={openModal}
                >
                    Login
                </button>
            </nav>

            {/* Login Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-gray-800 w-96 rounded-lg shadow-lg p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            {/* Logo */}
                            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl text-white font-bold">🚀</span>
                            </div>

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="hello@email.com"
                                className="w-full bg-gray-700 text-gray-300 px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />

                            {/* Email Button */}
                            <button className="w-full bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center mb-4 hover:bg-purple-700 transition duration-300">
                                <span className="mr-2">📧</span> Email
                            </button>

                            {/* Social Login Buttons */}
                            <div className="w-full">
                                <button className="w-full bg-white text-gray-800 py-2 rounded-lg mb-2 flex items-center justify-center shadow hover:bg-gray-100 transition duration-300">
                                    <span className="mr-2 text-lg">🌐</span> Google
                                </button>
                                <button className="w-full bg-gray-700 text-white py-2 rounded-lg flex items-center justify-center hover:bg-gray-600 transition duration-300">
                                    <span className="mr-2 text-lg">🐱</span> GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
