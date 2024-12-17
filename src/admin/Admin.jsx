import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { routes } from './RoutesConfig';
import { ContextProvider } from './contexts/ContextProvider.js'; // ContextProvider 여기로 이동
import './Admin.css';

const Admin = () => {
  return (
    <ContextProvider>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* Sidebar */}
        <div className="w-56 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="dark:bg-main-dark-bg bg-main-bg min-h-screen w-full md:ml-56">
          <Navbar />
          <Routes>
            {/* Default Redirect */}
            <Route path="/" element={<Navigate to="summary" />} />
            {/* Dynamic Routes */}
            {routes.map((category) =>
              category.links.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
              ))
            )}
          </Routes>
        </div>
      </div>
    </ContextProvider>
  );
};

export default Admin;
