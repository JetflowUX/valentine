import React, { useState, useEffect } from 'react';

const BlockchainLoveSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('blockchain-love-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const comparisons = [
    {
      blockchain: 'Thoughtful',
      love: 'Little surprises that feel like home',
      icon: '🎁',
    },
    {
      blockchain: 'Steady',
      love: 'Always there when it matters most',
      icon: '🫶',
    },
    {
      blockchain: 'Growing',
      love: 'Every day with you is better',
      icon: '🌷',
    },
  ];

  return (
    <section
      id="blockchain-love-section"
      className="py-12 sm:py-20 px-4 bg-gradient-to-b from-white via-red-100 to-rose-red"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-crimson-dark">
          Love in <span className="gradient-text">Real Life</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Connection visual */}
          <div className="mb-8 sm:mb-12 text-center">
            <div className={`inline-block ${inView ? 'animate-pulse' : ''}`}>
              <svg
                className="w-28 h-28 sm:w-40 sm:h-40 text-crimson/40 mx-auto drop-shadow-lg"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* Node connections */}
                <circle cx="50" cy="20" r="8" fill="currentColor" />
                <circle cx="25" cy="60" r="8" fill="currentColor" />
                <circle cx="75" cy="60" r="8" fill="currentColor" />
                <circle cx="50" cy="85" r="8" fill="currentColor" />
                
                {/* Connection lines */}
                <line x1="50" y1="28" x2="25" y2="52" />
                <line x1="50" y1="28" x2="75" y2="52" />
                <line x1="25" y1="68" x2="50" y2="77" />
                <line x1="75" y1="68" x2="50" y2="77" />
              </svg>
            </div>
          </div>

          {/* Comparison grid */}
          <div className="space-y-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`glass p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-4 sm:gap-6 glow-box ${
                  inView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: inView ? `${index * 0.15}s` : '0s',
                }}
              >
                <div className="text-3xl sm:text-5xl drop-shadow-lg transform transition-all duration-300 hover:scale-125">
                  {item.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-xs sm:text-sm font-bold text-crimson-dark uppercase tracking-wider mb-1 drop-shadow-sm">
                    {item.blockchain}
                  </p>
                  <p className="text-lg sm:text-2xl font-bold text-gray-800">{item.love}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Love manifesto */}
          <div className="mt-12 sm:mt-16 glass p-6 sm:p-8 md:p-12 rounded-2xl text-center glow-box">
            <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
              Our love is <span className="font-bold text-crimson-dark">honest</span>,
              <span className="font-bold text-crimson-dark"> steady</span>, and built to
              <span className="font-bold text-crimson-dark"> last forever</span>.
              Every moment with you is written into my heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainLoveSection;
