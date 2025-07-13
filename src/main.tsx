import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Page from '../app/page.tsx';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleMode = () => {
    setAnimate(true);
    setDarkMode(!darkMode);
    setTimeout(() => setAnimate(false), 500); // stop glow after animation
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Animated Toggle Button */}
      <div className="fixed top-4 left-4 z-50 group">
        <button
          onClick={toggleMode}
          className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 shadow-lg text-2xl transition hover:scale-110"
          aria-label="Toggle Dark Mode"
        >
          <span
            className={`toggle-icon ${animate ? 'glow' : ''}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </span>
        </button>
        <div className="opacity-0 group-hover:opacity-100 absolute top-full mt-1 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded shadow transition">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>

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
