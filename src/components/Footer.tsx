import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white dark:text-gray-100">Yonela Kulati</p>
            <p className="text-sm">Full-Stack Developer</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 dark:border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Yonela Kulati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;