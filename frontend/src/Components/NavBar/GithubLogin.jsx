/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

// Replace with your GitHub OAuth client ID and redirect URI
const GITHUB_CLIENT_ID = 'your-github-client-id';
const GITHUB_REDIRECT_URI = 'http://localhost:3000/github/callback';

const GitHubLogin = () => {
    const [authUrl, setAuthUrl] = useState('');

    // Generate GitHub OAuth URL with Client ID and Redirect URI
    const generateAuthUrl = () => {
        const url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}`;
        setAuthUrl(url);
    };

    // Handle login by redirecting to GitHub OAuth page
    const handleLogin = () => {
        generateAuthUrl();
        window.location.href = authUrl; // Redirect the user to GitHub OAuth page
    };

    return (
        <button
            onClick={handleLogin}
            className="py-2 px-6 rounded-lg font-semibold bg-blue-600 hover:bg-blue-500 transition duration-200"
        >
            Login with GitHub
        </button>
    );
};

export default GitHubLogin;
