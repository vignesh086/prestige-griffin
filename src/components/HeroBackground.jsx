function HeroBackground({ variant = 'default' }) {
  return (
    <div className={`hero-bg-animated ${variant}`}>
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-particles">
        <span className="hero-bg-particle particle-1"></span>
        <span className="hero-bg-particle particle-2"></span>
        <span className="hero-bg-particle particle-3"></span>
        <span className="hero-bg-particle particle-4"></span>
        <span className="hero-bg-particle particle-5"></span>
        <span className="hero-bg-particle particle-6"></span>
        <span className="hero-bg-particle particle-7"></span>
        <span className="hero-bg-particle particle-8"></span>
      </div>
      <div className="hero-bg-rings">
        <div className="hero-bg-ring ring-1"></div>
        <div className="hero-bg-ring ring-2"></div>
        <div className="hero-bg-ring ring-3"></div>
      </div>
      <div className="hero-bg-glow"></div>
    </div>
  );
}

export default HeroBackground;
