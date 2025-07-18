import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Page from '../app/page.tsx';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <Page />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
