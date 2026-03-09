import React, { useEffect, useState } from 'react';
import MyCV from "../assets/Yonela's-CV.pdf";
import ProfileImage from "../assets/profile1.jpeg";
import HeroBg from "../assets/profile4.jpeg"; 
import { Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer | Software Engineer';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-10 md:pt-0 overflow-hidden"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
  {/* Slightly darker overlay to improve contrast */}
  <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 -right-32 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 w-fit mx-auto lg:mx-0 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white">Available for new projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in leading-tight">
              Hi, I'm <span className="text-orange-400">Yonela</span>
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-gray-200 mb-6 h-10">
              <span className="border-r-2 border-orange-400 pr-2">
                {displayText}
              </span>
            </div>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed animate-slide-up">
              I craft elegant, scalable web applications using modern technologies. Specializing in full-stack development with a focus on performance, user experience, and clean architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg shadow-md"
              >
                <span>Contact Me To Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a
                href={MyCV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-2xl"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-orange-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-all duration-500 animate-pulse"></div>
              
              {/* Profile Image with hover scale + rotate */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl transition-transform duration-500 transform group-hover:scale-105">
                <img src={ProfileImage} alt="Yonela Kulati" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full animate-pulse shadow-[0_0_30px_rgba(255,140,0,0.6)] opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.6)] opacity-50" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
