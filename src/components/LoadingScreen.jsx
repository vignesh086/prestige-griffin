import { useState, useEffect } from 'react';

function LoadingScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.2 seconds (reduced from 4.5s for better UX)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    // Complete loading after 1.5 seconds (reduced from 5s for better UX)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1500);

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
          <img src="/griffin-logo.png" alt="Prestige Griffin Logo" width="120" height="120" />
        </div>
        <h1 className="loading-title">Prestige Griffin</h1>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
