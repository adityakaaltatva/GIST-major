import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Footer from "../Components/Footerdiv/Footer";
import ArchNavbar from "../Components/NavBar/archNavbar";
  
  // Register the necessary components for Chart.js
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  
  const Deployment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };
  
    useEffect(() => {
      if (!isLoading) {
        setShowPopup(true);
      }
    }, [isLoading]);
  
    const chartData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Visitors",
          data: [0, 0, 0, 0, 0, 0, 0], // All zeros for now
          borderColor: "#7C3AED", // Purple
          backgroundColor: "rgba(124, 58, 237, 0.2)", // Translucent Purple
          borderWidth: 2,
          tension: 0.3,
          pointBackgroundColor: "#fff",
        },
      ],
    };
  
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true, // Set to true to show the legend
          position: 'top', // Positioning the legend at the top
          labels: {
            color: "#CBD5E1", // Gray-300 color for the legend text
          }
        },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.8)", // Dark background for tooltips
          titleColor: "#fff",
          bodyColor: "#fff",
        },
      },
      scales: {
        x: {
          grid: {
            color: "#2d3748", // Darker grid lines
          },
          ticks: {
            color: "#CBD5E1", // Gray-300 color for x-axis labels
          },
        },
        y: {
          grid: {
            color: "#2d3748", // Darker grid lines
          },
          ticks: {
            color: "#CBD5E1", // Gray-300 color for y-axis labels
            beginAtZero: true, // Ensure y-axis starts at 0
          },
        },
      },
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white flex flex-col">
        <ArchNavbar />
  
        <div className="flex-grow p-8">
          <div className="flex space-x-6">
            <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:-translate-y-2">
              <h2 className="text-lg font-medium text-gray-200 mb-4">Deployment Details</h2>
              <ul className="space-y-4">
                <li>
                  <strong>Deployment:</strong> react-boilerplate68rk0jqbg.gist.app
                </li>
                <li>
                  <strong>Domains:</strong> react-boilerplate67.gist.app
                </li>
                <li>
                  <strong>Status:</strong>{" "}
                  <span className="text-green-400 font-semibold">Ready</span>
                </li>
                <li>
                  <strong>Created:</strong> 1 minutes ago by adityakaaltatva
                </li>
                <li>
                  <strong>Source:</strong> main
                </li>
              </ul>
            </div>
  
            <div className="flex-grow bg-gray-800 p-8 ml-6 rounded-lg shadow-xl">
              <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                Production Deployment
              </h1>
              <p className="text-gray-400 mb-6">
                The deployment that is available to your visitors.
              </p>
  
              {isLoading ? (
                <div className="space-y-4">
                  <div className="h-6 bg-gray-700 rounded-md animate-pulse"></div>
                  <div className="h-6 bg-gray-700 rounded-md animate-pulse w-3/4"></div>
                  <div className="h-6 bg-gray-700 rounded-md animate-pulse w-1/2"></div>
                </div>
              ) : (
                <div>
                  <p className="text-lg">
                    Your deployment <span className="text-purple-400">react-boilerplate</span> is now live at:
                  </p>
                  <a
                    href="https://gist-major.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mt-4 block"
                  >
                    react-boilerplate67.gist.app
                  </a>
                </div>
              )}
  
              <div className="mt-8">
                <h2 className="text-lg font-medium mb-4 text-white">Visitor Analytics</h2>
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <Footer />
  
        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold text-purple-400">Congratulations!</h2>
              <p className="mt-2">Your deployment is live and ready to use.</p>
              <button
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                onClick={handlePopupClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Deployment;
  