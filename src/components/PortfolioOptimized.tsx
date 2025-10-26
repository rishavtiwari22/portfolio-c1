import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from './Icons';
import { OptimizedImage } from './OptimizedImage';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const Portfolio: React.FC = () => {
  const categories = ['All', 'Web Design', 'Mobile App', 'UI/UX', 'AI'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { observe } = useIntersectionAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    delay: 100
  });

  // Memoize filtered projects to prevent unnecessary re-renders
  const filteredProjects = useMemo(() => {
    let filtered = activeCategory === 'All'
      ? projects
      : projects.filter(project => 
          project.category === activeCategory
          
        );
    
    // Only show first 3 projects on main page
    return filtered.slice(0, 3);
  }, [projects, activeCategory]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    // Use AbortController for proper cleanup
    const controller = new AbortController();
    const signal = controller.signal;
    
    // Optimized data fetching with caching
    fetch('/data/content.json', { signal })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data && Array.isArray(data.projects)) {
          // Set projects in a single update
          setProjects(data.projects);
        } else {
          setProjects([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching projects data:', error);
          setError('Failed to load projects. Please refresh the page.');
          setIsLoading(false);
        }
      });
      
    // Cleanup fetch when component unmounts
    return () => controller.abort();
  }, []);

  // Setup intersection observer for project cards
  useEffect(() => {
    // Use requestAnimationFrame for smoother animation scheduling
    const raf = requestAnimationFrame(() => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        // Set initial state with hardware acceleration
        (card as HTMLElement).style.opacity = '0';
        (card as HTMLElement).style.transform = 'translate3d(0, 20px, 0)'; // Use translate3d for hardware acceleration
        (card as HTMLElement).style.willChange = 'transform, opacity';
        
        // Stagger animations with smaller delays for better performance
        const delay = Math.min(index * 30, 300); // Cap max delay at 300ms
        setTimeout(() => {
          observe(card);
        }, delay);
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [filteredProjects, observe]);

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
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/10 to-purple-50/10 relative overflow-hidden w-full full-width-section">
      {/* Further optimized background elements - reduced number and blur for better performance */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-300/10 rounded-full blur-xl animate-blob" style={{animationDuration: '40s'}}></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-300/10 rounded-full blur-xl animate-blob" style={{animationDelay: '20s', animationDuration: '45s'}}></div>
      
      {/* Simple accent elements with reduced complexity */}
      <div className="absolute top-20 right-10 w-16 h-16 border border-purple-400/20 transform rotate-12"></div>
      
      <div className="container-fluid relative z-10">
        <div className="w-full px-5 md:px-10 xl:px-16">
          <div className="mb-16 text-center">
            <div className="inline-block backdrop-blur-sm bg-white/30 border border-white/50 rounded-full px-4 py-1 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-medium">Creative Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-blue-700 to-purple-800 bg-clip-text text-transparent">
              Let's have a look at my Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto backdrop-blur-lg bg-white/40 p-5 rounded-xl border border-white/30 shadow-lg mb-6">
              Here are some of my recent projects that I've worked on. Each project has been
              carefully crafted to meet client needs and deliver exceptional results.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-400/50 shadow-lg'
                    : 'bg-white/50 text-gray-700 border-white/30 hover:bg-white/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card glassmorphic bg-white/70 rounded-2xl overflow-hidden border-0 
                          shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
                style={{ 
                  backdropFilter: 'blur(16px)', 
                  WebkitBackdropFilter: 'blur(16px)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <a
                      href={project.link}
                      className="w-full backdrop-blur-md bg-white/80 text-gray-800 px-5 py-3 rounded-xl flex items-center justify-center gap-2
                                transform translate-y-4 group-hover:translate-y-0 transition-all duration-300
                                shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white"
                    >
                      <span>Explore Project</span>
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags && project.tags.map((tag: string, index: number) => (
                      <span key={index} className="text-xs bg-white/80 border border-white/50 text-gray-700 px-2 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-gray-600 bg-white/50 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/30">
                      Project
                    </span>
                    <a
                      href={project.link}
                      aria-label={`View ${project.title} project`}
                      className="w-10 h-10 rounded-full backdrop-blur-md bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/projects?mode=simple"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg hover:shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="mr-2">See All Projects</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
            <p className="text-sm text-gray-600 mt-3">Displaying 3 of {projects.length} projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
