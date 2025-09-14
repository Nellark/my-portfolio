import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProfileImage from "../assets/profile.jpeg";
import MyCV from "../assets/CV_Yonela.pdf";


const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer';
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

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Hi, I'm <span className="text-orange-600">Yonela</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-8">
              <span className="border-r-2 border-orange-600 dark:border-orange-400 pr-1 animate-pulse">
                {displayText}
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-slide-up">
              Building web applications with modern technologies. Passionate about clean code, 
              user experience, and creating solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <a
                href={MyCV}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Download Resume
              </a>

            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-orange-200 dark:border-orange-400/30 shadow-2xl animate-float">
              <img 
              src={ProfileImage} alt="Yonela Kulati" className="w-50 h-50 rounded-full" />
                
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;