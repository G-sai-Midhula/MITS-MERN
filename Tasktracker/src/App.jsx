import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TeamGroups from "./pages/TeamGroups";
import GroupTasks from "./pages/GroupTasks";
import ProjectUpdates from "./pages/ProjectUpdates";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? children : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages */}
        <Route
          path="/home"
          element={<ProtectedRoute><Home /></ProtectedRoute>}
        />

        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />

        {/* ===== TEAM ROUTES (MAIN) ===== */}
        <Route
          path="/teams"
          element={<ProtectedRoute><TeamGroups /></ProtectedRoute>}
        />

        <Route
          path="/teams/:groupId"
          element={<ProtectedRoute><GroupTasks /></ProtectedRoute>}
        />

        <Route
          path="/teams/:groupId/updates"
          element={<ProtectedRoute><ProjectUpdates /></ProtectedRoute>}
        />

        {/* ===== REDIRECT OLD /groups PATHS (FIXES ERROR) ===== */}
        <Route
          path="/groups"
          element={<Navigate to="/teams" replace />}
        />

        <Route
          path="/groups/:groupId"
          element={<Navigate to="/teams/:groupId" replace />}
        />

        <Route
          path="/groups/:groupId/updates"
          element={<Navigate to="/teams/:groupId/updates" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;