import React, { useState } from 'react';

const HeroSection = ({ onYes }) => {
  const [heartScale, setHeartScale] = useState(1);

  const handleHeartHover = () => {
    setHeartScale(1.2);
    setTimeout(() => setHeartScale(1), 300);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="text-center max-w-3xl">
        {/* Animated Heart/ADA Symbol */}
        <div
          className="mb-8 inline-block cursor-pointer"
          onMouseEnter={handleHeartHover}
          style={{ transform: `scale(${heartScale})` }}
        >
          <div className="text-8xl mb-4 animate-bounce-soft animate-glow-pulse filter drop-shadow-2xl">💙</div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl animate-fade-in">
          Will You Be My <span className="gradient-text animate-glow-pulse">Valentine?</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-2xl text-white/90 mb-8 font-light animate-fade-in drop-shadow-lg">
          Built on trust. Secured by love. Powered by <span className="font-semibold text-red-100">Passion</span>.
        </p>

        {/* CTA Button */}
        <button
          onClick={onYes}
          className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-crimson-light via-fire-red to-glow-red text-white font-bold text-lg md:text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-slide-up glow-box"
        >
          Yes 💙
        </button>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <p className="text-white/80 mb-2 text-sm font-medium">Scroll to learn why</p>
          <svg
            className="w-6 h-6 mx-auto text-white/80 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
