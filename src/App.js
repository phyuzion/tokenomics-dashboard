import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { routes } from './RoutesConfig';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
  const { activeMenu, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-56 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Main Content */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-56' : 'flex-2'
            }`}
          >
            <Navbar />
            <Routes>
              {/* Default Redirect */}
              <Route path="/" element={<Navigate to="/summary" />} />

              {/* Dynamically Render Routes */}
              {routes.map((category) =>
                category.links.map((route, index) => (
                  <Route key={index} path={route.path} element={route.component} />
                ))
              )}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
