import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/';
import About from './pages/About/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

