import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon } from './Icons';

export const Portfolio: React.FC = () => {
  const categories = ['All', 'Web Design', 'Mobile App', 'UI/UX', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear localStorage cache related to projects to prevent stale data
    try {
      localStorage.removeItem('projectsData');
    } catch (e) {
      console.log('LocalStorage cleanup skipped');
    }
    
    setIsLoading(true);
    setError(null);
    
    // Use a timeout to avoid any race conditions
    const timeoutId = setTimeout(() => {
      fetch('/data/content.json')
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          if (data && Array.isArray(data.projects)) {
            console.log(`Loaded ${data.projects.length} projects successfully`);
            setProjects(data.projects);
          } else {
            console.error('Projects data is not in the expected format', data);
            setProjects([]);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching projects data:', error);
          setError('Failed to load projects. Please refresh the page.');
          setIsLoading(false);
        });
    }, 100);
      
    // Add scroll animation observer with a delay to ensure DOM is ready
    let observer: IntersectionObserver | null = null;
    
    const observerTimeout = setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-right');
            (entry.target as HTMLElement).style.opacity = '1';
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
      
      // Use a nested timeout to make sure DOM elements are ready
      setTimeout(() => {
        const projectElements = document.querySelectorAll('.project-card');
        if (projectElements.length > 0) {
          projectElements.forEach(el => {
            // Set initial opacity to visible if in Chrome normal mode
            // This helps with rendering issues in some browsers
            (el as HTMLElement).style.opacity = '0.95';
            observer?.observe(el);
          });
        } else {
          console.log('No project cards found to animate');
        }
      }, 100);
    }, 500);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(observerTimeout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Apply staggered animations when category changes
  useEffect(() => {
    // Add a small delay to ensure DOM updates with the filtered projects
    const animationTimeout = setTimeout(() => {
      const projectCards = document.querySelectorAll('.project-card');
      console.log(`Found ${projectCards.length} project cards after category change to ${activeCategory}`);
      
      projectCards.forEach((card, index) => {
        // Make sure cards are initially visible with a high opacity
        (card as HTMLElement).style.opacity = '0.95';
        
        setTimeout(() => {
          card.classList.add('animate-fade-in-right');
          (card as HTMLElement).style.opacity = '1';
        }, 100 * index);
      });
    }, 150);
    
    return () => clearTimeout(animationTimeout);
  }, [activeCategory]);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/10 to-purple-50/10">
        <div className="container mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 w-1/4 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <div className="h-6 w-1/2 mx-auto bg-gray-200 rounded mb-2"></div>
            <div className="h-6 w-1/3 mx-auto bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/10 to-purple-50/10">
        <div className="container mx-auto text-center">
          <p className="text-red-500 font-semibold">{error}</p>
        </div>
      </section>
    );
  }

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
                    : 'bg-white/50 text-gray-700 border-white/30 hover:bg-white/70 shadow-inner-neumorphic'
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

          {/* Display loading spinner when projects are loading */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
            </div>
          )}

          {/* Display error message if there's an error loading projects */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mx-auto max-w-lg my-10">
              <p className="text-center">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-3 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md mx-auto block"
              >
                Refresh Page
              </button>
            </div>
          )}

          {/* Project Grid with enhanced 3D perspective */}
          {!isLoading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="project-card glassmorphic bg-white/70 rounded-2xl overflow-hidden border-0 
                              shadow-[0_10px_40px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_15px_60px_rgba(8,_112,_184,_0.2)] 
                              transition-all duration-500 hover:-translate-y-2 group flex flex-col transform perspective-1000 h-full"
                    style={{ 
                      opacity: 0.95, // Starting with visible opacity
                      backdropFilter: 'blur(16px)', 
                      WebkitBackdropFilter: 'blur(16px)',
                      transitionDelay: `${index * 100}ms`,
                      transformStyle: 'preserve-3d',
                      transform: `perspective(1000px) rotateY(${index % 2 ? '0.8' : '-0.8'}deg) translateZ(5px)`,
                      boxShadow: index % 2 ? 
                        'inset 3px 3px 10px rgba(255,255,255,0.2), inset -3px -3px 10px rgba(0,0,0,0.05)' : 
                        'inset -3px 3px 10px rgba(255,255,255,0.2), inset 3px -3px 10px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div className="relative h-48 overflow-hidden group perspective-1000">
                      {/* Abstract background design */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-pink-300/20 z-0 group-hover:opacity-70 transition-opacity"></div>
                      
                      {/* Brutalist accent element */}
                      <div className="absolute top-4 left-4 w-16 h-5 bg-yellow-400/80 transform -rotate-12 z-10"></div>
                      <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-blue-500/40 z-10"></div>
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 relative z-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
                        <a
                          href={project.link}
                          className="w-full backdrop-blur-md bg-white/80 border-0 text-gray-800 px-5 py-3 rounded-xl flex items-center justify-center gap-2
                                    transform translate-y-4 group-hover:translate-y-0 transition-all duration-500
                                    shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white"
                        >
                          <span>Explore Project</span>
                          <ExternalLinkIcon className="w-4 h-4 group-hover:ml-2 transition-all" />
                        </a>
                      </div>
                    </div>
                    <div className="p-5 glassmorphic-light flex-1 flex flex-col relative z-10 border-t border-white/30">
                      {/* Enhanced 3D effect on hover with better depth perception and gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-100/60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 origin-bottom rounded-b-2xl"></div>
                      
                      <div className="flex flex-wrap gap-1.5 mb-2 relative z-10">
                        {project.tags && project.tags.map((tag: string, index: number) => (
                          <span key={index} className="text-xs neumorphic-flat bg-white/80 border border-white/50 text-gray-700 px-2 py-0.5 rounded-full font-medium transform transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-md duration-300" style={{transitionDelay: `${index * 50}ms`}}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800 relative z-10 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500">{project.title}</h3>
                      <div className="flex justify-between items-center mt-auto relative z-10">
                        <span className="text-xs text-gray-600 bg-white/50 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/30">{project.category}</span>
                        <a
                          href={project.link}
                          aria-label={`View ${project.title} project`}
                          className="w-10 h-10 rounded-full backdrop-blur-md bg-gradient-to-br from-orange-500/90 to-orange-600/90 flex items-center justify-center text-white shadow-md border-0 hover:shadow-lg hover:scale-110 transition-all duration-300 group-hover:rotate-12"
                        >
                          <ExternalLinkIcon className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};