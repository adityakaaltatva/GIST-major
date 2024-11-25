import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import './App.css';

// Import Components
import Footer from "./Components/Footerdiv/Footer";
import ArchNavbar from "./Components/NavBar/archNavbar.jsx"; // ArchNavbar
import DeploymentNavbar from "./Components/NavBar/DeploymentNavbar"; // DeploymentNavbar
import NavBar from "./Components/NavBar/NavBar";

// Import Pages
import Search from "./Components/SearchDiv/Search.jsx";
import AccessControl from "./pages/AccessControl.jsx";
import Blog from "./pages/Blog.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Deploy from "./pages/Deploy.jsx";
import DeployGit from "./pages/DeployGit.jsx";
import Deployment from "./pages/Deployment.jsx";
import FileManagement from "./pages/FileManagement.jsx";
import { Future } from "./pages/Future.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Logs from "./pages/Logs.jsx";
import Pricing from "./pages/Pricing.jsx";
import Profile from "./pages/Profile.jsx";
import RedisDashboard from "./pages/redis.jsx";
import Settings from "./pages/Settings.jsx";
import TermsAndConditions from "./pages/Terms.jsx";

const AppContent = () => {
  const location = useLocation();

  // Define paths where NavBar and Footer should be hidden
  const hideHeaderFooter =
    location.pathname === "/deploy-git" ||
    location.pathname === "/deploy" ||
    location.pathname === "/dashboard"||
    location.pathname === "/deployment" ;

  // Define paths where ArchNavbar should be shown
  const showArchNavbar =
    location.pathname === "/access-control" ||
    location.pathname === "/logs" ||
    location.pathname === "/settings" ||
    location.pathname === "/file-management";

  // Define paths where DeploymentNavbar should be shown
  const showDeploymentNavbar = location.pathname === "/deployment";

  return (
    <div className="app-container">
      {!hideHeaderFooter && !showDeploymentNavbar && <NavBar />}

      {showArchNavbar && <ArchNavbar />}

      {showDeploymentNavbar && <DeploymentNavbar />}

      {/*  Routes */}
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/access-control" element={<AccessControl />} />
        <Route path="/file-management" element={<FileManagement />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/future" element={<Future />} />
        <Route path="/redis" element={<RedisDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deploy-git" element={<DeployGit />} />
        <Route path="/deployment" element={<Deployment />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
      </Routes>

      {!hideHeaderFooter && !showDeploymentNavbar && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  );
};

export default App;
