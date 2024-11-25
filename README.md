

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
- **AWS S3 Integration**: Uses AWS S3 for storing deployed files, making deployments robust and accessible.
- **Custom Build Pipelines**: Build your project with custom pipelines tailored to your project's needs, ensuring optimized builds.
- **GitHub Integration**: Fetch code directly from GitHub repositories for automatic deployment.
- **Static & Dynamic File Support**: Supports both static HTML/CSS deployments as well as dynamic React and Vite projects.
- **Localhost Deployment for Backend**: Serve backend services locally during development on `localhost:3000`.
- **Automatic API Key Generation**: Securely generate and use API keys through CLI commands for accessing endpoints.
- **CNAME and Request Handler**: Supports custom domain setup via CNAME records for personalized deployment URLs.

---

## Installation

To install **Gist**, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gist-cli.git
   cd gist-cli
   ```

2. Install the dependencies:

   **Using npm:**
   ```bash
   npm install
   ```

   **Using yarn:**
   ```bash
   yarn install
   ```

3. Install the CLI globally:

   **Using npm:**
   ```bash
   npm install -g .
   ```

   **Using yarn:**
   ```bash
   yarn global add .
   ```

---

## Usage

Once installed, you can use the **Gist CLI** to deploy your projects. Here’s a basic guide on how to use it:

### Initialize a New Project

To start a new deployment project, run:

```bash
gist init
```

This command will prompt you for the repository URL, the type of project (React, Vite, Static), and other setup configurations.

### Deploy a Project

To deploy an existing project, run:

```bash
gist deploy
```

This will:
- Pull your project files from GitHub.
- Run the build pipeline.
- Deploy the files to AWS S3.
- Configure any custom domain (if set).

### Generate API Key

To generate an API key for your deployment:

```bash
gist generate-api-key
```

This will return a secure API key that can be used for interacting with your deployed services.

---

## Configuration

The configuration for **Gist** is stored in the `gist.config.js` file located at the root of your project directory. Below is a sample configuration:

```js
module.exports = {
  repository: "https://github.com/yourusername/project-name",
  build: {
    command: "npm run build",
    output: "dist",
  },
  deploy: {
    bucket: "your-s3-bucket-name",
    region: "us-east-1",
  },
  domains: {
    cname: "yourcustomdomain.com",
    requestHandler: "/handler-endpoint",
  },
};
```

### Key Configuration Options:
- **repository**: The GitHub repository URL for your project.
- **build**: Configuration for building your project, including the build command and output directory.
- **deploy**: AWS S3 bucket name and region for deployment.
- **domains**: CNAME record for custom domains and the request handler for API calls.

---

## Project Structure

Here’s an overview of the key directories and files in the **Gist** repository:

```
/gist-cli
├── /src                   # Source code for the CLI and deployment logic
│   ├── /commands           # Command-line interface commands
│   ├── /utils              # Utility functions for deployments
│   ├── /config             # Configuration handling and management
├── /dist                   # Build output files for distribution
├── /examples               # Example configurations and projects
├── /docs                   # Documentation files
├── /assets                 # Assets such as images or static files
├── gist.config.js          # Global configuration file
└── package.json            # Project metadata and dependencies
```

---

## Future Features

- **Multi-region Deployment**: Expand deployments to multiple AWS regions for better redundancy.
- **Auto-scaling**: Integration with AWS Auto Scaling for handling increased traffic automatically.
- **Real-time Logs**: Implement real-time log streaming for deployed services.
- **Containerized Deployments**: Support for deploying containerized applications (Docker, Kubernetes).
- **Improved Monitoring**: Integration with monitoring tools like Prometheus or Datadog.

---

## Contributing

We welcome contributions to **Gist**! If you have an idea for a new feature or a bug fix, feel free to fork the repository and submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and write tests.
4. Submit a pull request with a detailed description of your changes.

Before contributing, please review the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

---

## License

**Gist** is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

### Additional Resources:
- [GitHub Repository](https://github.com/yourusername/gist-cli)
- [CLI Command Reference](docs/cli-reference.md)
- [API Documentation](docs/api.md)
  
---

