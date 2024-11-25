import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footerdiv/Footer";
import Dashboard from "./pages/Dashboard.jsx";
import AccessControl from "./pages/AccessControl.jsx";
import FileManagement from "./pages/FileManagement.jsx";
import Logs from "./pages/Logs.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import Logout from "./pages/Logout.jsx";
import './App.css';
import Search from "./Components/SearchDiv/Search.jsx";
import Blog from "./pages/Blog.jsx";
import Pricing from "./pages/Pricing.jsx";
import Deploy from "./pages/Deploy.jsx";
import { Future } from "./pages/Future.jsx";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/dashboard" || location.pathname === "/deploy";

  return (
    <div className="app-container">
      {!hideHeaderFooter && <NavBar />}
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
      </Routes>
      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
