import React, { useEffect, useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footerdiv/Footer";
import ArchNavbar from "../Components/NavBar/archNavbar";
import Skeleton from "./skeleton";

const DeployGit = () => {
  const navigate = useNavigate();
  const [githubUrl, setGithubUrl] = useState("");
  const [isDeploying, setIsDeploying] = useState(false);
  const [isRequestBlocked, setIsRequestBlocked] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(false);
  const [userWallet, setUserWallet] = useState(null);
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [timer, setTimer] = useState(30);

  const isValidGithubUrl = (url) => /github\.com/.test(url);

  useEffect(() => {
    if (isDeploying && timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }

    if (timer === 0) {
      navigate("/deployment");
    }
  }, [timer, isDeploying, navigate]);

  const handleMetaMaskConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAddress = accounts[0];
        setUserWallet(userAddress);
        setIsMetaMaskConnected(true);
      } catch (error) {
        console.error("MetaMask connection error:", error);
        alert("Failed to connect MetaMask. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask.");
    }
  };

  const handleDeploy = async () => {
    if (!isValidGithubUrl(githubUrl)) {
      alert("Please enter a valid GitHub URL.");
      return;
    }

    if (!captchaVerified) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    if (!isMetaMaskConnected) {
      alert("Please connect MetaMask to proceed.");
      return;
    }

    if (!agreedToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    if (isRequestBlocked) {
      alert("Please wait before making another request.");
      return;
    }

    setIsDeploying(true);
    setIsRequestBlocked(true);
    setTimer(30);
  };

  const handleCaptchaVerification = () => {
    setIsCaptchaLoading(true);
    setTimeout(() => {
      setCaptchaVerified(true);
      setIsCaptchaLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <ArchNavbar />
      <div className="flex-grow p-8 flex flex-col items-center">
        {isDeploying ? (
          <Skeleton />
        ) : (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Deploy a New Project
              </h1>
              <p className="text-gray-400 text-lg">
                Effortlessly deploy your app to production with GIST.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-2xl">
              <h2 className="text-lg font-medium text-gray-200 mb-4">Deploy from GitHub</h2>
              <div className="mb-6">
                <label className="text-gray-400 block text-sm mb-2">GitHub Repository URL</label>
                <input
                  type="text"
                  placeholder="Enter GitHub URL"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full p-4 bg-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-600"
                />
                {!isValidGithubUrl(githubUrl) && githubUrl && (
                  <p className="text-red-400 text-sm mt-2">Invalid GitHub URL.</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  className={`flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 ${
                    isDeploying || !isValidGithubUrl(githubUrl) || isRequestBlocked
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleDeploy}
                  disabled={isDeploying || !isValidGithubUrl(githubUrl) || isRequestBlocked}
                >
                  {isDeploying ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" /> Deploying...
                    </>
                  ) : (
                    "Deploy Now"
                  )}
                </button>
                <button className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform">
                  <FaPlus className="mr-2" />
                  Add Variables
                </button>
              </div>
            </div>

            {isDeploying && (
              <div className="mt-8 flex flex-col items-center space-y-4">
                <p className="text-lg font-medium text-gray-200">
                  Deploying in <span className="text-purple-400">{timer}</span> seconds...
                </p>
                <div className="w-full max-w-md bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-purple-600 h-full transition-all"
                    style={{ width: `${(30 - timer) * (100 / 30)}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col items-center space-y-6">
              {!captchaVerified ? (
                <button
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                  onClick={handleCaptchaVerification}
                >
                  {isCaptchaLoading ? "Verifying..." : "Verify CAPTCHA"}
                </button>
              ) : (
                <p className="text-green-500 font-medium">CAPTCHA Verified!</p>
              )}

              {isMetaMaskConnected ? (
                <p className="text-green-500 font-medium">Wallet Connected: {userWallet}</p>
              ) : (
                <button
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                  onClick={handleMetaMaskConnection}
                >
                  Connect Wallet
                </button>
              )}
            </div>

            <div className="mt-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 text-purple-600 bg-gray-800 rounded"
                />
                <span className="text-sm text-gray-400">
                  I agree to the{" "}
                  <a
                    href="/terms-condition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    terms and conditions
                  </a>
                </span>
              </label>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DeployGit;
