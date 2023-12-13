import React, { useEffect, useState } from 'react';

const ProgressBar = ({ width, isVisible }) => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    let interval;

    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = skillsSection.offsetTop;

      if (scrollPosition >= targetPosition && !isAnimationStarted) {
        startAnimation();
      }
    };

    const startAnimation = () => {
      setIsAnimationStarted(true);
      interval = setInterval(() => {
        setIsAnimationStarted(false);
      }, 1); // Repetir cada 10 segundos
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [isAnimationStarted]);

  return (
    <div className="progress">
      <div
        className={`progress-bar ${isAnimationStarted ? 'start-animation' : ''}`}
        style={{ width: `${isVisible ? width : 0}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
