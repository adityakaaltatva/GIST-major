/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Search = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoSelection = (video) => {
        setSelectedVideo(video);
        document.getElementById("video-section").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            {/* Header Section */}
            <header className="w-full py-20 px-20 bg-gray-900 shadow-md mb-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-6xl font-extrabold text-white leading-tight">GIST Deployments</h1>
                    <p className="text-lg text-gray-300 leading-relaxed mt-6 max-w-lg mx-auto">
                        Simplify your infrastructure and deploy with ease using GIST. Automated, scalable, and secure deployments for modern applications.
                    </p>
                </div>
            </header>

            <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-10 space-y-8 border-[6px] border-transparent bg-clip-border mt-8"
                 style={{ borderImage: "linear-gradient(to right, #7F00FF, #00BFFF) 1" }}>
                {/* Key Features Section */}
                <section>
                    <p className="text-2xl font-semibold text-white text-center mb-4">
                        Key Features
                    </p>
                    <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[ 
                            { title: "Automated Pipelines", desc: "Deploy both frontend and backend with ease." },
                            { title: "GitHub Integration", desc: "Enable CI/CD for streamlined workflows." },
                            { title: "Scalability", desc: "Built for cloud environments with high availability." },
                            { title: "Blockchain Security", desc: "Transparent, secure, and tamper-proof deployments." },
                        ].map((feature, index) => (
                            <li
                                key={index}
                                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                aria-label={feature.title}
                            >
                                <span className="block text-xl font-bold text-gray-300">{feature.title}</span>
                                <p className="text-gray-400 mt-2">{feature.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Footer Section */}
                <div className="text-center mt-8">
                    <button
                        className="px-8 py-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:from-purple-700 hover:to-blue-600 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105"
                        aria-label="Deploy a New Project"
                    >
                        Deploy a New Project
                    </button>
                </div>
            </div>

            {/* Bar Section: Scale, Monitor, Evolve */}
            <nav className="w-full bg-gray-800 py-6 mt-12 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-around text-center">
                    {[ 
                        { title: "Scale", desc: "Seamlessly expand your infrastructure.", video: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1732459080/etbtvp7bt2sfqtmi8sys.mkv" },
                        { title: "Monitor", desc: "Stay informed with built-in observability.", video: "https://www.youtube.com/embed/IqQT2aA0TWI?autoplay=1" },
                        { title: "Evolve", desc: "Adapt to modern frameworks effortlessly.", video: "/assets/evolve.mp4" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer hover:bg-gray-700 p-4 rounded-md transition-all"
                            onClick={() => handleVideoSelection(item.video)}
                        >
                            <span className="text-2xl font-bold text-gray-300">{item.title}</span>
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
                } w-full bg-gray-900 py-8 mt-6 shadow-lg transition-opacity duration-500 ease-in opacity-100`}
            >
                <div className="max-w-5xl mx-auto p-4">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                        GIST
                    </h3>
                    {/* Display video based on selection */}
                    <iframe
                        className="w-full h-[500px] rounded-lg shadow-lg"
                        src={selectedVideo}
                        title="Video"
                        allow="autoplay; fullscreen"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>

            {/* Footer White Strip */}
            <div className="w-full h-0.1 bg-white mt-12"></div>
        </div>
    );
};

export default Search;
