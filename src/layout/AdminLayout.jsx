import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold">Admin Panel</div>
        <nav className="flex flex-col gap-2 p-4">
          <NavLink to="/admin/dashboard" className="hover:text-green-600">
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className="hover:text-green-600">
            Users
          </NavLink>
          <NavLink to="/admin/blogs" className="hover:text-green-600">
            Blogs
          </NavLink>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between">
          <span>Admin Dashboard</span>
          <button
            onClick={logout}
            className="text-red-500 hover:underline"
          >
            Logout
          </button>
        </header>

        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
