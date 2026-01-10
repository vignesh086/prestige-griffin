import { useState, useEffect } from 'react';

function LoadingScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 4.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    // Complete loading after 5 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="bg-animation"></div>
      <div className="loading-content">
        <div className="loading-logo">
          <img src="/griffin-logo.png" alt="Prestige Griffin Logo" />
        </div>
        <h1 className="loading-title">Prestige Griffin</h1>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
