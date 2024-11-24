import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
        <Route path="/" element={
            <>
            <Search/>
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/access-control" element={<AccessControl />} />
          <Route path="/file-management" element={<FileManagement />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* add the things in below */}
          <Route path="/Deploy" element={<Pricing />} />
          <Route path="/new" element={<Pricing />} />




        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
