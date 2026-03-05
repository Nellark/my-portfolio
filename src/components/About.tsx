
import React, { useEffect, useRef } from 'react';
import PostmanIcon from '../assets/postman.svg';
import { Code2, Database, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png' },
        { name: 'Angular', icon: 'https://img.icons8.com/color/96/angularjs.png' },
        { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png' },
        { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/tailwind_css.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/javascript--v1.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/96/css3.png' },
        { name: 'HTML', icon: 'https://img.icons8.com/color/96/html-5--v1.png' },
        { name: 'Figma', icon: 'https://img.icons8.com/color/96/figma--v1.png' },
      ]
    },
    backend: {
      title: 'Backend & APIs',
      icon: Database,
      skills: [
        { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png' },
        { name: 'Spring Boot', icon: 'https://img.icons8.com/color/96/spring-logo.png' },
        { name: 'Java', icon: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png' },
        { name: 'C#', icon: 'https://img.icons8.com/color/96/c-sharp-logo.png' },
        { name: '.NET', icon: 'https://img.icons8.com/?size=96&id=1BC75jFEBED6&format=png' },
        { name: 'REST APIs', icon: 'https://img.icons8.com/color/96/api-settings.png' },
        { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/96/postgreesql.png' },
        { name: 'MySQL', icon: 'https://img.icons8.com/color/96/mysql-logo.png' },
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: Zap,
      skills: [
        { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png' },
        { name: 'GitHub', icon: 'https://img.icons8.com/color/96/github--v1.png' },
        { name: 'Postman', icon: PostmanIcon },
        { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png' },
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* (Header removed per request) */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a software developer with an NQF Level 5 in Software Development and an NQF Level 6 in Software Engineering. 
                I have experience working with Java, JavaScript, TypeScript, React, C#, Angular, Node.js, Spring Boot, and PostgreSQL.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                I am currently contributing to the ProtoCare Patient Portal, where I help build features and work with APIs as part of a full-stack development environment. I enjoy building practical software, solving problems, and continuously improving my skills.
              </p>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '2+', label: 'Years Experience', icon: '📈' },
                { number: '10+', label: 'Projects Completed', icon: '🎯' },
                { number: '15+', label: 'Technologies', icon: '⚡' },
                { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="space-y-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Proficient in a wide range of technologies and frameworks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <div key={key} className="space-y-6 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                      <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-card opacity-0 group cursor-pointer"
                      >
                        <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-white dark:bg-gray-700 hover:shadow-lg dark:hover:shadow-lg dark:shadow-gray-900/30 transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-400">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
