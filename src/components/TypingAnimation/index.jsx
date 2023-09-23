import React, { useEffect, useState } from 'react';

function TypingAnimation() {
  const text = "Nicolas Verez, développeur fullstack"; 
  const [displayText, setDisplayText] = useState(''); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {

    const addNextLetter = () => {
      if (currentIndex < text.length) {
        const nextLetter = text[currentIndex];
        setDisplayText((prevText) => prevText + nextLetter);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const typingInterval = setInterval(addNextLetter, 100); 


    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <h1>{displayText}</h1>
  );
}

export default TypingAnimation;