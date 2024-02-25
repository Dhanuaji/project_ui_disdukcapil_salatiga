import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/DashboardPage';
import NotFoundPage from './pages/not_found_page/NotFoundPage';
import AbsensiPage from './pages/absensi/AbsensiPage';
import DaftarAbsensiPage from './pages/daftar-absensi/DaftarAbsensi';
import ProfilePage from './pages/profile/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/absensi',
    element: <AbsensiPage />
  },
  {
    path: '/daftar-absensi',
    element: <DaftarAbsensiPage />
  },
  {
    path: '/profile-user',
    element: <ProfilePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
