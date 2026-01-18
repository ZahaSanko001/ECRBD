import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import AdminLayout from './layout/AdminLayout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/login", element: <Login/>},
  {path: "/admin", element: <AdminLayout/>},
  {path: "/admin/dashboard", element: <Dashboard/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
