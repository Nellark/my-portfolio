import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Nellark',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/yonela-kulati-665717133/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:nelakulati@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center text-white font-bold">
                Y
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Yonela Kulati</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full-Stack Developer passionate about building beautiful, scalable web applications that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Quick Links</h4>
            <nav className="space-y-2 flex flex-col">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 text-sm font-medium flex items-center space-x-1"
                >
                  <span>→</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Connect</h4>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-orange-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-600/50"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>using</span>
              <span className="font-semibold text-gray-900 dark:text-white">React</span>
              <span>&</span>
              <span className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              © {currentYear} Yonela Kulati. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mb-4 p-3 rounded-full bg-orange-400 text-white hover:bg-orange-500 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
          title="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;