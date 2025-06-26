import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Kamesh R";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 150);
    
    return () => clearInterval(typingInterval);
  }, [fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate random positions for animated elements
  const generateRandomElements = () => {
    const elements = [];
    
    // Floating shapes
    for (let i = 0; i < 8; i++) {
      const shapes = ['circle', 'square', 'triangle'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      elements.push({
        type: 'floating-shape',
        className: shape,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: shape === 'triangle' ? 'auto' : `${30 + Math.random() * 50}px`,
          height: shape === 'triangle' ? 'auto' : `${30 + Math.random() * 50}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${6 + Math.random() * 4}s`
        }
      });
    }
    
    // Drifting particles
    for (let i = 0; i < 20; i++) {
      elements.push({
        type: 'drifting-particle',
        style: {
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${10 + Math.random() * 10}s`
        }
      });
    }
    
    // Pulsing dots
    for (let i = 0; i < 12; i++) {
      elements.push({
        type: 'pulsing-dot',
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }
      });
    }
    
    // Rotating rings
    for (let i = 0; i < 5; i++) {
      const size = 50 + Math.random() * 100;
      elements.push({
        type: 'rotating-ring',
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }
      });
    }
    
    // Wave lines
    for (let i = 0; i < 6; i++) {
      elements.push({
        type: 'wave-line',
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${6 + Math.random() * 4}s`
        }
      });
    }
    
    return elements;
  };

  const backgroundElements = generateRandomElements();

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(15px) rotate(240deg); }
        }
        
        @keyframes drift {
          0% { transform: translateX(-100px) translateY(0px); }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-100px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
        
        .hero-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
          color: white;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 2rem 0;
        }
        
        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .floating-shape {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-shape.circle {
          border-radius: 50%;
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
        }
        
        .floating-shape.square {
          background: linear-gradient(45deg, #f59e0b, #d97706);
          transform: rotate(45deg);
        }
        
        .floating-shape.triangle {
          width: 0;
          height: 0;
          background: transparent;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 50px solid rgba(139, 92, 246, 0.3);
        }
        
        .drifting-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: drift 15s linear infinite;
        }
        
        .pulsing-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(96, 165, 250, 0.7);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }
        
        .rotating-ring {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top-color: rgba(96, 165, 250, 0.3);
          animation: rotate 20s linear infinite;
        }
        
        .wave-line {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent);
          animation: wave 8s ease-in-out infinite;
        }
        
        .hero-content {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: bold;
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
        }
        
        .cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: white;
          margin-left: 0.5rem;
          animation: blink 1s infinite;
        }
        
        .hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.5rem);
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeInUp 1s ease forwards 0.5s;
        }
        
        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1s ease forwards 1s;
          max-width: 600px;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          opacity: 0;
          animation: fadeInUp 1s ease forwards 1.5s;
        }
        
        .hero-button {
          min-width: 140px;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-transform: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
          outline: none;
        }
        
        .hero-button.primary {
          background-color: #1976d2;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .hero-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          background-color: #1565c0;
        }
        
        .hero-button.outlined {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .hero-button.outlined:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          cursor: pointer;
          opacity: 0;
          animation: fadeIn 1s ease forwards 2s, bounce 2s infinite 2s;
          font-size: 2rem;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          
          .hero-button {
            min-width: auto;
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
      
      <div id="home" className="hero-container">
        {/* Animated Background */}
        <div className="background-animation">
          {backgroundElements.map((element, index) => (
            <div
              key={index}
              className={`${element.type} ${element.className || ''}`}
              style={element.style}
            />
          ))}
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title" id="typing-text">
            {typedText}
            {showCursor && <span className="cursor"></span>}
          </h1>
          
          <h2 className="hero-subtitle">
            Web Developer & UI/UX Designer
          </h2>
          
          <p className="hero-description">
            Crafting elegant digital experiences with modern technologies and creative solutions.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="hero-button primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="hero-button outlined"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div 
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
        >
          ↓
        </div>
      </div>
    
    </>
  );
};

export default Hero;