import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Blogs from "../pages/admin/Blogs";
import AdminLayout from "../layout/AdminLayout";
import RequireAuth from "../auth/RequireAuth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <RequireAuth role="Admin">
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  );
}
