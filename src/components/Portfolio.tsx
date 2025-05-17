import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon } from './Icons';

export const Portfolio: React.FC = () => {
  const categories = ['All', 'Web Design', 'Mobile App', 'UI/UX', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/src/data/content.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects || []));
      
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-right');
          (entry.target as HTMLElement).style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });
    
    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  // Apply staggered animations when category changes
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-fade-in-right');
        (card as HTMLElement).style.opacity = '1';
      }, 100 * index);
    });
  }, [activeCategory]);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/10 to-purple-50/10 relative overflow-hidden perspective-1000 w-full full-width-section">
      {/* Enhanced animated background elements with larger size and deeper colors */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/25 rounded-full blur-3xl animate-blob" style={{animationDuration: '20s'}}></div>
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-purple-300/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s', animationDuration: '25s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '4s', animationDuration: '22s'}}></div>
      
      {/* Enhanced brutalist geometric accents with bolder colors and shadows */}
      <div className="absolute top-20 right-10 w-24 h-24 border-6 border-purple-400/40 transform rotate-12 shadow-lg"></div>
      <div className="absolute bottom-32 left-10 w-20 h-40 bg-blue-400/20 transform -rotate-12 shadow-md"></div>
      <div className="absolute top-40 left-20 w-16 h-16 bg-orange-400/30 transform rotate-45 shadow-lg"></div>
      
      <div className="container-fluid relative z-10">
        <div className="w-full px-5 md:px-10 xl:px-16">
          <div className="mb-16 text-center">
            <div className="inline-block backdrop-blur-sm bg-white/30 border border-white/50 rounded-full px-4 py-1 mb-4 animate-float">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-medium animate-gradient-text bg-size-200">Creative Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-blue-700 to-purple-800 bg-clip-text text-transparent animate-gradient-text bg-size-200">
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300">Let's</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.1s'}}>have</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.2s'}}>a</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.3s'}}>look</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.4s'}}>at</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.5s'}}>my</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.6s'}}>Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto backdrop-blur-lg bg-white/40 p-5 rounded-xl border border-white/30 shadow-neumorphic-light transform hover:scale-[1.01] transition-all duration-500">
              Here are some of my recent projects that I've worked on. Each project has been
              carefully crafted to meet client needs and deliver exceptional results.
            </p>
          </div>

          {/* Filter Buttons - Claymorphic style with consistent orange theme */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all backdrop-blur-sm border relative overflow-hidden group ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-400/50 shadow-lg transform scale-105'
                    : 'bg-white/50 text-gray-700 border-white/30 hover:bg-white/70 shadow-inner-neumorphic dark:bg-gray-800/40 dark:text-gray-200 dark:border-white/10'
                }`}
              >
                {/* Button background animation */}
                <span className={`absolute inset-0 w-full h-full ${
                  activeCategory === category ? 'bg-orange-400/20' : 'bg-white/10'
                } transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center`}></span>
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          {/* Project Grid with enhanced 3D perspective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card glassmorphic rounded-2xl overflow-hidden border-0 
                          shadow-[0_15px_60px_rgba(8,_112,_184,_0.6)] hover:shadow-[0_25px_80px_rgba(8,_112,_184,_0.8)] 
                          transition-all duration-500 hover:-translate-y-3 group flex flex-col transform perspective-1000"
                style={{ 
                  opacity: 0,
                  backdropFilter: 'blur(16px)', 
                  WebkitBackdropFilter: 'blur(16px)',
                  transitionDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d',
                  transform: index % 2 ? 
                    'perspective(1000px) rotateY(3deg) translateZ(10px)' : 
                    'perspective(1000px) rotateY(-3deg) translateZ(10px)',
                  boxShadow: index % 2 ? 
                    'inset 5px 5px 15px rgba(255,255,255,0.2), inset -5px -5px 15px rgba(0,0,0,0.1)' : 
                    'inset -5px 5px 15px rgba(255,255,255,0.2), inset 5px -5px 15px rgba(0,0,0,0.1)'
                }}
              >
                <div className="relative h-60 overflow-hidden group perspective-1000">
                  {/* Abstract background design */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-pink-300/20 z-0 group-hover:opacity-70 transition-opacity"></div>
                  
                  {/* Brutalist accent element */}
                  <div className="absolute top-5 left-5 w-20 h-6 bg-yellow-400/80 transform -rotate-12 z-10"></div>
                  <div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-blue-500/40 z-10"></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 relative z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
                    <a
                      href={project.link}
                      className="w-full backdrop-blur-md bg-white/70 border-0 text-gray-800 px-5 py-3 rounded-xl flex items-center justify-center gap-2
                                transform translate-y-4 group-hover:translate-y-0 transition-all duration-500
                                shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white
                                dark:bg-gray-800/60 dark:text-white/90 dark:border dark:border-white/10"
                    >
                      <span>Explore Project</span>
                      <ExternalLinkIcon className="w-4 h-4 group-hover:ml-2 transition-all" />
                    </a>
                  </div>
                </div>
                <div className="p-7 glassmorphic-light flex-1 flex flex-col relative z-10 border-t border-white/30">
                  {/* Enhanced 3D effect on hover with better depth perception and gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-100/60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 origin-bottom rounded-b-2xl"></div>
                  
                  <div className="flex flex-wrap gap-2 mb-3 relative z-10">
                    {project.tags && project.tags.map((tag: string, index: number) => (
                      <span key={index} className="text-xs neumorphic-flat bg-white/80 border border-white/50 text-gray-700 px-3 py-1 rounded-full font-medium transform transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-md duration-300" style={{transitionDelay: `${index * 50}ms`}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 relative z-10 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500">{project.title}</h3>
                  <div className="flex justify-between items-center mt-auto relative z-10">
                    <span className="text-sm text-gray-600 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">{project.category}</span>
                    <a
                      href={project.link}
                      aria-label={`View ${project.title} project`}
                      className="w-12 h-12 rounded-full backdrop-blur-md bg-gradient-to-br from-orange-500/90 to-orange-600/90 flex items-center justify-center text-white shadow-lg border-0 hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:rotate-12"
                    >
                      <ExternalLinkIcon className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                      <span className="absolute inset-0 rounded-full bg-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center px-7 py-3 rounded-xl relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform rotate-3"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -rotate-3 scale-105"></span>
              <span className="relative z-10 text-white font-medium flex items-center">
                <span className="mr-2">See All Projects</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};