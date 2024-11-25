/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Search = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoSelection = (video) => {
        setSelectedVideo(video);
        document.getElementById("video-section").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white font-sans">
            {/* Header Section */}
            <header className="w-full py-20 px-20 bg-gray-900 shadow-md mb-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 leading-tight drop-shadow-md animate-fade-in">
                        GIST Deployments
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed mt-6 max-w-lg mx-auto">
                        Simplify your infrastructure and deploy with ease using GIST. Automated, scalable, and secure deployments for modern applications.
                    </p>
                </div>
            </header>

            {/* Main Content Section */}
            <div
                className="max-w-5xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-10 space-y-8 border-[6px] border-transparent bg-clip-border mt-8 animate-slide-in"
                style={{ borderImage: "linear-gradient(to right, #7F00FF, #00BFFF) 1" }}
            >
                {/* Key Features Section */}
                <section>
                    <p className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 drop-shadow-sm">
                        Key Features
                    </p>
                    <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Automated Pipelines",
                                desc: "Seamlessly deploy frontend and backend with ease.",
                                icon: "🚀",
                            },
                            {
                                title: "GitHub Integration",
                                desc: "Streamline CI/CD workflows with GitHub integration.",
                                icon: "🔗",
                            },
                            {
                                title: "Scalability",
                                desc: "Designed for high-demand, cloud-native environments.",
                                icon: "🌐",
                            },
                            {
                                title: "Blockchain Security",
                                desc: "Ensure transparency with tamper-proof deployments.",
                                icon: "🔒",
                            },
                        ].map((feature, index) => (
                            <li
                                key={index}
                                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-600 hover:border-purple-500"
                                aria-label={feature.title}
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-5xl">{feature.icon}</span>
                                    <span className="block text-2xl font-bold text-white">
                                        {feature.title}
                                    </span>
                                </div>
                                <p className="text-gray-400 mt-3">{feature.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Deploy Button */}
                <div className="text-center mt-8">
                    <Link to="/deploy">
                        <button
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg text-lg font-semibold text-white shadow-md transform transition-transform hover:scale-110"
                            aria-label="Deploy a New Project"
                        >
                            Deploy a New Project
                        </button>
                    </Link>
                </div>
            </div>

            {/* Navigation Section */}
            <nav className="w-full bg-gray-800 py-6 mt-12 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-around text-center">
                    {[
                        {
                            title: "Scale",
                            desc: "Seamlessly expand your infrastructure.",
                            video: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1732459080/etbtvp7bt2sfqtmi8sys.mkv",
                        },
                        {
                            title: "Monitor",
                            desc: "Stay informed with built-in observability.",
                            video: "https://www.youtube.com/embed/IqQT2aA0TWI?autoplay=1",
                        },
                        {
                            title: "Evolve",
                            desc: "Adapt to modern frameworks effortlessly.",
                            video: "/assets/evolve.mp4",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer hover:bg-gray-700 p-4 rounded-md transition-all transform hover:scale-105"
                            onClick={() => handleVideoSelection(item.video)}
                        >
                            <span className="text-2xl font-bold text-white">{item.title}</span>
                            <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </nav>

            {/* Video Section */}
            <div
                id="video-section"
                className={`${
                    selectedVideo ? "block" : "hidden"
                } w-full bg-gray-900 py-8 mt-6 shadow-lg transition-opacity duration-500 ease-in`}
            >
                <div className="max-w-5xl mx-auto p-4">
                    <h3 className="text-2xl font-bold text-center text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        GIST Architecture
                    </h3>
                    <iframe
                        className="w-full h-[500px] rounded-lg shadow-lg"
                        src={selectedVideo}
                        title="Video"
                        allow="autoplay; fullscreen"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>

            <div className="w-full h-0.5 bg-white mt-12"></div>
        </div>
    );
};

export default Search;
