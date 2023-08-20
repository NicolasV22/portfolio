import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/';
import About from './pages/About/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogementPage from './pages/LogementPage';
import Error from './pages/Error/'


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<LogementPage />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

    </Router>
  </React.StrictMode>
);

