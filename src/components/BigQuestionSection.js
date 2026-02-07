import React, { useState, useEffect } from 'react';

const BigQuestionSection = ({ onYes }) => {
  const [inView, setInView] = useState(false);
  const [noHover, setNoHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('big-question-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleNoHover = () => {
    setNoHover(true);
    setTimeout(() => setNoHover(false), 500);
  };

  return (
    <section
      id="big-question-section"
      className="py-12 sm:py-20 px-4 bg-gradient-to-b from-rose-red via-red-200 to-white"
    >
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div
          className={`glass p-6 sm:p-8 md:p-16 rounded-3xl max-w-2xl shadow-2xl glow-box ${
            inView ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-crimson-dark">
            So… will you be my <span className="gradient-text">Valentine?</span>
          </h2>

          <p className="text-center text-gray-700 mb-8 sm:mb-12 text-base sm:text-lg font-medium">
            This is the most important question I'll ever ask. 💙
          </p>

          <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-col sm:flex-row">
            {/* Yes Button */}
            <button
              onClick={onYes}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-crimson-light via-fire-red to-glow-red text-white font-bold text-base sm:text-lg md:text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-soft glow-box"
            >
              Yes 💙
            </button>

            {/* Of Course Button */}
            <button
              onMouseEnter={handleNoHover}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 md:px-10 md:py-5 bg-white border-2 border-crimson-dark text-crimson-dark font-bold text-base sm:text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl hover:bg-red-100 hover:border-crimson-light active:scale-95 transition-all duration-300 glow-box ${
                noHover ? 'animate-bounce' : ''
              }`}
            >
              Of course 😌
            </button>
          </div>

          {/* Fun message */}
          <p className="text-center text-gray-600 mt-8 sm:mt-12 italic text-xs sm:text-sm">
            Spoiler: Both buttons lead to the same answer. I'm just checking if you're as smitten as I am. 😄
          </p>
        </div>
      </div>
    </section>
  );
};

export default BigQuestionSection;
