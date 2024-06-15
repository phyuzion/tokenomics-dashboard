import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Summary, Transactions, Calendar, Scanner, WalletA, WalletB, WalletC, WalletD, WalletE,Stacked, Pyramid, Holders, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg p-0'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='TopCenter'>
              <button
                type="button"
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-56 fixed sidebar dark:bg-secondary-dark-bg bg-white'>

              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-56' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>


            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>

                {/* Dashboard */}
                <Route path="/" exact element={<Summary />} />
                <Route path="/summary" exact element={<Summary />} />

                {/* Pages */}
                <Route path="/transactions" exact element={<Transactions />} />
                <Route path="/scanner" exact element={<Scanner />} />
                <Route path="/WalletA" exact element={<WalletA />} />
                <Route path="/WalletB" exact element={<WalletB />} />
                <Route path="/WalletC" exact element={<WalletC />} />
                <Route path="/WalletD" exact element={<WalletD />} />
                <Route path="/WalletE" exact element={<WalletE />} />
                <Route path="/Holders" exact element={<Holders />} />

                {/* Apps */}
                <Route path="/kanban" exact element={<Kanban />} />
                <Route path="/editor" exact element={<Editor />} />
                <Route path="/calendar" exact element={<Calendar />} />

                {/* Charts */}
                <Route path="/line" exact element={<Line />} />
                <Route path="/area" exact element={<Area />} />
                <Route path="/bar" exact element={<Bar />} />
                <Route path="/pie" exact element={<Pie />} />
                <Route path="/financial" exact element={<Financial />} />
                <Route path="/color-mapping" exact element={<ColorMapping />} />
                <Route path="/pyramid" exact element={<Pyramid />} />
                <Route path="/stacked" exact element={<Stacked />} />

              </Routes>
            </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
