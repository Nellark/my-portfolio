import React, { useEffect, useState } from 'react';
import ProfileImage from "../assets/profile.jpeg";
import MyCV from "../assets/CV_Yonela.pdf";
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

  // const scrollToAbout = () => {
  //   const element = document.getElementById('about');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-100 rounded-full overflow-hidden border-4 border-orange-200 shadow-2xl animate-float">
                <img src={ProfileImage} alt="Yonela Kulati" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
