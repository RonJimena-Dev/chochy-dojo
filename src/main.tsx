import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Page from '../app/page.tsx';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded shadow 
                   bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Your App Content */}
      <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
        <Page />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
