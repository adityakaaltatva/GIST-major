# Gist - CLI-Based Deployment Service

**Gist** is a CLI-based deployment tool designed to streamline the deployment of web applications. It provides seamless production-level deployment capabilities, utilizing AWS S3 for storage, GitHub for code management, and custom build pipelines. Gist supports static web pages, React, and Vite projects, merging the functionalities of services like Vercel and Render.

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Future Features](#future-features)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **CLI Interface:** Simple command-line interface for easy setup and deployment.
- **AWS S3 Integration:** Uses S3 for storing deployed files, making deployments robust and accessible.
- **Custom Build Pipelines:** Build your project with custom pipelines tailored to your project's needs.
- **GitHub Integration:** Fetch code directly from GitHub repositories.
- **Static & Dynamic File Support:** Deploy HTML/CSS files as well as React and Vite projects.
- **Localhost Deployment for Backend:** Serve backend services locally during development on `localhost:3000`.
- **Automatic API Key Generation:** Generate and use API keys securely through CLI commands.
- **CNAME and Request Handler:** Supports custom domain setup with CNAME records.

---

## Installation

To install Gist, you need Node.js installed. Gist is available as an npm package.

```bash
npm install -g gist-cli
