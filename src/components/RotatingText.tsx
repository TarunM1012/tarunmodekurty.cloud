import { useState, useEffect } from "react";

const RotatingText = () => {
  const titles = [
    "AI Engineer",
    "Software Engineer", 
    "Photographer",
    "Startup Founder"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsVisible(true);
      }, 300); // Half of transition duration for smooth effect
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
      <span className="text-white font-semibold">Tarun Modekurty:</span>{" "}
      <span 
        className={`inline-block transition-all duration-600 ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-2'
        } bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium`}
      >
        {titles[currentIndex]}
      </span>
    </p>
  );
};

export default RotatingText; 