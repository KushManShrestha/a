import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ position: 'fixed', top: '1rem', right: '1rem' }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <section className="section">
        <h1>Hi, I'm Kush Man Shrestha</h1>
        <p>Project Manager & QA Engineer</p>
        <a href="./CV.pdf" download>
          <button>Download CV</button>
        </a>
      </section>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
