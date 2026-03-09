import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with shopping cart functionality, user authentication, and payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Stripe API'],
      githubUrl: 'https://github.com/The-DigitalAcademy/e-commerce',
      liveUrl: 'https://kulshopper.netlify.app/',
      category: 'fullstack',
      highlights: ['Payment Integration', 'User Auth', 'Shopping Cart']
    },
    {
      title: 'Nail Tech Management System',
      description: 'Complete salon management application with appointment scheduling, staff management, and customer records.',
      image: 'https://cdn1.treatwell.net/images/view/v2.i13523089.w1080.h720.x7BA4471A/',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/The-DigitalAcademy/Yoni_Saloon',
      liveUrl: 'https://nkele.netlify.app/',
      category: 'fullstack',
      highlights: ['Appointment Scheduling', 'Staff Management', 'Client Records']
    },
    {
      title: 'Budget Tracker App',
      description: 'Personal finance management application with expense tracking, budget planning, and financial analytics.',
      image: 'https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['JavaScript', 'LocalStorage', 'CSS'],
      githubUrl: 'https://github.com/mudauml15/save-money',
      liveUrl: '#',
      category: 'frontend',
      highlights: ['Expense Tracking', 'Budget Planning', 'Analytics']
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management platform with real-time updates, team collaboration, and project tracking.',
      image: 'https://www.corexta.com/wp-content/uploads/2024/12/how-to-keep-track-of-tasks.jpeg',
      technologies: ['Angular', 'TypeScript', 'Material UI'],
      githubUrl: 'https://github.com/The-DigitalAcademy/done_deal',
      liveUrl: '#',
      category: 'fullstack',
      highlights: ['Real-time Updates', 'Team Collaboration', 'Project Tracking']
    },
    {
      title: 'School Records Management',
      description: 'Comprehensive student information system with grade tracking, attendance monitoring, and academic reporting.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
      githubUrl: 'https://github.com/Nellark/School-records',
      liveUrl: '#',
      category: 'fullstack',
      highlights: ['Grade Tracking', 'Attendance Monitoring', 'Academic Reporting']
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting application that displays current conditions, hourly updates, and 7-day forecasts.',
      image: 'https://i.pinimg.com/736x/d6/35/91/d63591612d87b872c7486005a4541ffe.jpg',
      technologies: ['Angular', 'TypeScript', 'OpenWeather API'],
      githubUrl: 'https://github.com/Nellark/weather-app',
      liveUrl: 'https://nelaweather.netlify.app',
      category: 'frontend',
      highlights: ['Weather API', 'Forecasting', 'Real-time Data']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-8 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-30 -z-10 transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-4 mx-auto">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcase of my recent work demonstrating full-stack capabilities, modern technologies, and problem-solving expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-orange-400 text-white shadow-lg hover:bg-orange-500'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 shadow-md hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2 flex items-start justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-1">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-400 text-white text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    title="View on GitHub"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:shadow-lg"
                      title="View Live Demo"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Want to see more? Check out my GitHub profile</p>
          <a
            href="https://github.com/Nellark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            <span>Explore More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;