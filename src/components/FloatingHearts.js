import React, { useState, useEffect } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 5,
      };
      setHearts((prev) => [...prev, heart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 10000);
    };

    const interval = setInterval(createHeart, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none text-3xl animate-float opacity-20"
          style={{
            left: `${heart.left}%`,
            top: '100vh',
            animationDelay: `${heart.delay}s`,
            animation: `float 10s ease-in-out forwards`,
          }}
        >
          💙
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
