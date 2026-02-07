import React, { useState, useEffect } from 'react';

const SuccessOverlay = ({ onClose }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create confetti particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
      char: ['💙', '💕', '💖', '✨', '🎉'][Math.floor(Math.random() * 5)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Confetti particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none text-3xl animate-confetti"
          style={{
            left: `${particle.left}%`,
            top: '-10px',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.char}
        </div>
      ))}

      {/* Success card */}
      <div className="relative bg-[#E1280B] border border-white/20 p-8 md:p-16 rounded-3xl max-w-xl shadow-2xl animate-slide-up">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors"
        >
          ✕
        </button>
        <div className="text-center">
          <div className="text-7xl mb-6 animate-bounce-soft">💙✨</div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            You've Made Me The Happiest!
          </h1>

          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            I knew you would say yes. You've always been my greatest "yes."
          </p>

          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl mb-8 shadow-lg">
            <p className="text-white font-bold text-lg">
              Here's to a lifetime of moments as special as this one. 💕
            </p>
          </div>

          <p className="text-white/80 mb-8 font-medium">
            Made with 💙 by Jethro the uxpert
          </p>

          <button
            onClick={onClose}
            className="px-8 py-3 bg-white text-[#E1280B] font-bold rounded-full hover:shadow-xl active:scale-95 transition-all duration-300"
          >
            Close & Celebrate 🎉
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessOverlay;
