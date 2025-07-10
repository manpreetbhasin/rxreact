import React, { useState, useRef, useEffect } from 'react';
import './SlidingPanel.css';
import { Link } from 'react-router-dom';

const SlidingPanel = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height < 50 ? 50 : height);
    }
  }, [children]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sliding-panel-container ${isOpen ? 'open' : ''}`}>
      <div 
        className="sliding-panel"
        style={{ height: isOpen ? `${contentHeight}px` : '0' }}
      >
        <div ref={contentRef} className="sliding-panel-content">
        <Link to="/">Home</Link>
        </div>
      </div>
      <button onClick={togglePanel} className="toggle-button">
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>
    </div>
  );
};

export default SlidingPanel;