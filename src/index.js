import React from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioRouter from './components/PortfolioRouter';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PortfolioRouter/>
  </React.StrictMode>
);

