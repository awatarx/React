import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home'
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import LandingPage from './components/Pages/Landingpage/LandingPage';



function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={ <Home />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
