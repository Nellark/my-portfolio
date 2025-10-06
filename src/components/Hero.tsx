import React, { useEffect, useState } from 'react';
import ProfileImage from "../assets/Profile.jpeg";
import MyCV from "../assets/Yonela-CV.pdf";
import HeroBg from "../assets/profile4.jpeg"; 

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer | Software Engineer';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-10 md:pt-0"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
              Hi, I'm <span className="text-orange-500">Yonela</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-200 mb-4 h-8">
              <span className="border-r-2 border-orange-500 pr-1 animate-pulse">
                {displayText}
              </span>
            </div>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl animate-slide-up">
              Building web applications with modern technologies. Passionate about clean code, 
              user experience, and creating solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <a
                href={MyCV}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Profile Image with hover scale + rotate */}
              <div className="w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl animate-float transition-transform duration-500 transform group-hover:scale-105 group-hover:rotate-2">
                <img src={ProfileImage} alt="Yonela Kulati" className="w-full h-full object-cover" />
              </div>

              {/* Top-right neon pulse circle */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,165,0,0.7)]"></div>

              {/* Bottom-left neon pulse circle */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(255,140,0,0.7)]" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
