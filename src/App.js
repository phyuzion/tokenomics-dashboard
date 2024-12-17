import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Tokenomics from './tokenomics/Tokenomics.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로는 Admin으로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/tokenomics" />} />
        {/* Admin 페이지 */}
        <Route path="/tokenomics/*" element={<Tokenomics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
