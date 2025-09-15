import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/96/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/96/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/javascript--v1.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png' },
    { name: 'Angular', icon: 'https://img.icons8.com/color/96/angularjs.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/96/mysql-logo.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/96/postgreesql.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png' },
    { name: 'GitHub', icon: 'https://img.icons8.com/color/96/github--v1.png' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/tailwind_css.png' },
    { name: 'REST APIs', icon: 'https://img.icons8.com/color/96/api-settings.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png' },
    { name: 'Spring Boot', icon: 'https://img.icons8.com/color/96/spring-logo.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png' },
    { name: 'Postman', icon: 'https://img.icons8.com/color/96/postman-api.png' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 100);
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-orange-600 mb-6"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full-Stack Developer with expertise in modern web technologies. 
                I specialize in creating robust, scalable applications using frameworks like Angular, 
                React, Spring Boot, and Java, alongside tools like Node.js, and working with various databases including MySQL and PostgreSQL.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in software development is driven by a love for clean code, 
                exceptional user experiences, and solving complex problems through technology. 
                I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-600 dark:border-orange-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What I Do</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Full-Stack Web Development</li>
                  <li>• RESTful API Development</li>
                  <li>• Database Design & Management</li>
                  <li>• Responsive Web Design</li>
                  <li>• Code Optimization & Performance</li>
                </ul>
              </div>
            </div>
          </div>

          <div ref={skillsRef} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Technical Skills</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-card opacity-0 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col items-center space-y-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;