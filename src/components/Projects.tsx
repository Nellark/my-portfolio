import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with shopping cart functionality, user authentication, and payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Stripe API'],
      githubUrl: 'https://github.com/The-DigitalAcademy/cart_easy',
      liveUrl: '#'
    },
    {
      title: 'Salon Management System',
      description: 'Complete salon management application with appointment scheduling, staff management, and customer records.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/The-DigitalAcademy/Yoni_Saloon',
      liveUrl: '#'
    },
    {
      title: 'Budget Tracker App',
      description: 'Personal finance management application with expense tracking, budget planning, and financial analytics.',
      image: 'https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['JavaScript', 'LocalStorage', 'CSS'],
      githubUrl: 'https://github.com/mudauml15/save-money',
      liveUrl: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management platform with real-time updates, team collaboration, and project tracking.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'TypeScript', 'Material UI'],
      githubUrl: 'https://github.com/The-DigitalAcademy/done_deal',
      liveUrl: '#'
    },
    {
      title: 'School Records Management',
      description: 'Comprehensive student information system with grade tracking, attendance monitoring, and academic reporting.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
      githubUrl: 'https://github.com/Nellark/School-records',
      liveUrl: '#'
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting application that displays current conditions, hourly updates, and 7-day forecasts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'TypeScript', 'OpenWeather API'],
      githubUrl: 'https://github.com/Nellark/weather-app',
      liveUrl: 'https://nelaweather.netlify.app'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern web technologies, and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;