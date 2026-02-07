import React, { useState, useEffect } from 'react';

const WhyYouSpecialSection = () => {
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

    const section = document.getElementById('why-special-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: '✨',
      title: 'You Make Me Smile',
      description: 'Every moment with you lights up my world in ways I never thought possible.',
      color: 'from-yellow-100 to-orange-100',
    },
    {
      icon: '🏰',
      title: 'You\'re My Safe Place',
      description: 'In your arms, I find comfort, trust, and a home I\'ve always dreamed of.',
      color: 'from-love-light to-pink-100',
    },
    {
      icon: '∞',
      title: 'You\'re My Forever',
      description: 'With you, I see a future that\'s boundless, beautiful, and eternally ours.',
      color: 'from-purple-100 to-blue-100',
    },
    {
      icon: '🔐',
      title: 'You\'re My Anchor',
      description: 'Steadfast, strong, and true. You ground me when the world spins.',
      color: 'from-rose-100 to-blue-100',
    },
  ];

  return (
    <section
      id="why-special-section"
      className="py-20 px-4 bg-gradient-to-b from-rose-red via-white to-red-100"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-crimson-dark">
          Why You're <span className="gradient-text">Special</span>
        </h2>
        <p className="text-center text-gray-700 mb-16 text-lg font-medium">
          Because every reason is a promise written in our hearts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`card glass p-8 rounded-2xl shadow-lg glow-box ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: inView ? `${index * 0.1}s` : '0s',
              }}
            >
              <div className={`bg-gradient-to-br ${reason.color} p-6 rounded-xl mb-4 inline-block shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6`}>
                <span className="text-4xl drop-shadow-lg">{reason.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-crimson-dark mb-2">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYouSpecialSection;
