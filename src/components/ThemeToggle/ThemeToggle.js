import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="theme-switch" 
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch" className="toggle-label">
        <span className="toggle-icon">
          {isDarkMode ? '🌙' : '☀️'}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;