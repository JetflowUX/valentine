import React, { useEffect, useMemo, useState } from 'react';

const MainSection = ({ onYes }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showMain, setShowMain] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const reasons = useMemo(
    () => [
      {
        id: 1,
        icon: '✨',
        title: 'You Make Me Smile',
        description: 'Every moment with you lights up my world',
      },
      {
        id: 2,
        icon: '❤️',
        title: 'You\'re My Safe Place',
        description: 'In your arms, I find my home',
        delay: '5s',
      },
      {
        id: 3,
        icon: '🏰',
        title: 'You\'re My Forever',
        description: 'With you, I see eternity',
        delay: '10s',
      },
      {
        id: 4,
        icon: '🔐',
        title: 'You\'re My Anchor',
        description: 'Steadfast and true',
        delay: '15s',
      },
      {
        id: 5,
        icon: '💫',
        title: 'You Complete Me',
        description: 'The missing piece of my heart',
        delay: '20s',
      },
      {
        id: 6,
        icon: '🐝',
        title: 'You\'re Amazing',
        description: 'High integrity, high quality human',
        delay: '25s',
      },
      {
        id: 7,
        icon: '🌟',
        title: 'You\'re My Star',
        description: 'You light up my darkest nights',
        delay: '30s',
      },
      {
        id: 8,
        icon: '🎵',
        title: 'You\'re My Song',
        description: 'My heart sings with you',
        delay: '35s',
      },
      {
        id: 9,
        icon: '🌹',
        title: 'You\'re Beautiful',
        description: 'Inside and out',
        delay: '40s',
      },
      {
        id: 10,
        icon: '✈️',
        title: 'My Adventure',
        description: 'Let\'s explore forever together',
        delay: '45s',
      },
      {
        id: 11,
        icon: '🎁',
        title: 'My Greatest Gift',
        description: 'You\'re all I ever needed',
        delay: '50s',
      },
      {
        id: 12,
        icon: '🌈',
        title: 'You\'re My Rainbow',
        description: 'After every storm comes you',
      },
    ],
    []
  );

  const alignments = useMemo(
    () => [
      'items-start justify-start text-left',
      'items-start justify-end text-right',
      'items-end justify-start text-left',
      'items-end justify-end text-right',
      'items-center justify-center text-center',
    ],
    []
  );

  const rows = 6;
  const cols = isMobile ? 6 : 8;
  const totalCards = rows * cols;
  const gridCards = useMemo(() => {
    return Array.from({ length: totalCards }, (_, index) => {
      const reason = reasons[index % reasons.length];
      return {
        id: index + 1,
        reason,
        alignment: alignments[index % alignments.length],
        delay: `${(index % 12) * 0.4}s`,
        showText: Math.random() > 0.35,
      };
    });
  }, [totalCards, reasons, alignments]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-hidden px-1 py-2 sm:px-2">
      {/* Background grid of cards */}
      <div className="absolute inset-0">
        <div
          className="grid w-full h-full gap-1 p-1 sm:gap-2 sm:p-2 md:gap-3 md:p-4"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: 'repeat(6, minmax(0, 1fr))',
          }}
        >
          {gridCards.map((card) => (
            <div
              key={card.id}
              className={`grid-card flex p-2 sm:p-2 md:p-3 ${card.alignment} animate-drift`}
              style={{
                animationDelay: card.delay,
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {card.showText && (
                <div
                  className={`text-[9px] sm:text-[10px] md:text-xs leading-tight uppercase tracking-wide ${
                    hoveredCard === card.id ? 'opacity-100' : 'opacity-80'
                  }`}
                >
                  <div className="text-white/90 font-semibold">{card.reason.title}</div>
                  <div className="text-white/70 mt-0.5 sm:mt-1 normal-case tracking-normal text-[8px] sm:text-[9px]">
                    {card.reason.description}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main question overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {showMain && (
          <div className="relative text-center max-w-3xl px-4">
            <div className="absolute inset-0 rounded-3xl glass-portal" />
            <div className="relative p-4 sm:p-6 md:p-10 lg:p-12 rounded-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                So… will you be my <span className="text-white" style={{ fontFamily: "'Dancing Script', cursive" }}>Valentine?</span>
              </h2>

              <div className="flex gap-2 sm:gap-3 justify-center flex-col sm:flex-row">
                <button
                  onClick={onYes}
                  className="w-full sm:w-48 md:w-60 h-12 sm:h-14 bg-white text-[#E1280B] font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Yes! ❤️
                </button>

                <button
                  onClick={onYes}
                  className="w-full sm:w-48 md:w-60 h-12 sm:h-14 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Of course! 😌
                </button>
              </div>

              <p className="text-white/80 mt-3 sm:mt-4 italic text-xs sm:text-sm text-center">
                Spoiler: Both answers lead to the same happy ending 💕
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
