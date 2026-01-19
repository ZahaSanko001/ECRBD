import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import AdminLayout from './layout/AdminLayout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'
import RequireAuth from './auth/RequireAuth.jsx'
import Users from './pages/admin/Users.jsx'
import Blogs from './pages/admin/Blogs.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/login", element: <Login/>},
  {path: "/admin", element: (
                    <RequireAuth role={"Admin"}> 
                      <AdminLayout/>
                    </RequireAuth>), 
                   children: [
                    { index: true, element: <Dashboard/> },
                    { path: "/admin/dashboard", element: <Dashboard/> },
                    { path: "/admin/users", element: <Users/> },
                    { path: "/admin/blogs", element: <Blogs/> },
                   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
