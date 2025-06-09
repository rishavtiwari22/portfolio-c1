import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ExternalLinkIcon, ArrowLeftIcon } from './Icons';
import { OptimizedImage } from './OptimizedImage';

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're in simple mode (accessed from "See All Projects" button)
  const isSimpleMode = new URLSearchParams(location.search).get('mode') === 'simple';

  // No filtering, just use all projects
  const filteredProjects = useMemo(() => {
    return projects;
  }, [projects]);

  // Track initial mount
  const [isInitialMount, setIsInitialMount] = useState(true);
  
  // Initial data loading
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
        
        // Use a small timeout for smoother loading transition
        setTimeout(() => {
          setIsLoading(false);
          setIsInitialMount(false);
        }, 300);
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching projects data:', error);
          setError('Failed to load projects. Please try again later.');
          setIsLoading(false);
          setIsInitialMount(false);
        }
      });
      
    // Cleanup fetch when component unmounts
    return () => controller.abort();
  }, []);
  
  // Handle loading transition
  useEffect(() => {
    if (!isInitialMount) {
      // Show brief loading state
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isInitialMount]);

  // Add scroll event listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
      {!isSimpleMode && <Navbar />}
      <section className={`${isSimpleMode ? 'py-8 md:py-12' : 'py-16 md:py-24'} bg-gradient-to-br from-gray-50 via-blue-50/10 to-purple-50/10 relative overflow-hidden w-full full-width-section`}>
        {/* Background elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-300/10 rounded-full blur-xl animate-blob" style={{animationDuration: '40s'}}></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-300/10 rounded-full blur-xl animate-blob" style={{animationDelay: '20s', animationDuration: '45s'}}></div>
        <div className="absolute top-20 right-10 w-16 h-16 border border-purple-400/20 transform rotate-12"></div>
        
        {/* Back button */}
        <div className="container-fluid relative z-10">
          <div className="w-full px-5 md:px-10 xl:px-16">
            <div className="flex items-center justify-between mb-12">
              <button 
                onClick={() => navigate('/#portfolio')}
                className="flex items-center text-gray-700 hover:text-orange-600 transition-all duration-300 group bg-white/60 backdrop-blur-md border border-white/40 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Back to Projects Section"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-3 transform group-hover:-translate-x-2 transition-transform duration-300" />
                <span className="font-semibold">Back to Projects</span>
              </button>
              
              {isSimpleMode && (
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  All Projects
                </h1>
              )}
              
              <div className="w-32"></div> {/* Spacer for balance */}
            </div>
            
            {/* Header Section */}
            {!isSimpleMode && (
              <div className="mb-16 text-center">
                <div className="inline-block backdrop-blur-sm bg-white/30 border border-white/50 rounded-full px-4 py-1 mb-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text font-medium">All Projects</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-blue-700 to-purple-800 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  Explore My Creative Work
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto backdrop-blur-lg bg-white/40 p-5 rounded-xl border border-white/30 shadow-lg animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                  Browse through my complete collection of projects. Each one represents unique challenges 
                  solved and skills applied to deliver exceptional results.
                </p>
              </div>
            )}

            {/* Spacing element - removed search and filter section */}
            <div className="mb-12"></div>

            {/* Loading State */}
            {isLoading ? (
              <div className="animate-pulse grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, index) => (
                  <div 
                    key={index} 
                    className="bg-white/70 rounded-2xl overflow-hidden p-5 h-96 shadow-lg border border-white/30 backdrop-blur-md"
                    style={{
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="h-52 bg-gray-200/70 rounded-xl mb-4"></div>
                    <div className="flex gap-2 mb-3">
                      <div className="h-5 bg-gray-200/70 rounded-full w-16"></div>
                      <div className="h-5 bg-gray-200/70 rounded-full w-12"></div>
                    </div>
                    <div className="h-5 bg-gray-200/70 rounded-xl w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200/70 rounded-xl w-full mb-3"></div>
                    <div className="h-4 bg-gray-200/70 rounded-xl w-2/3"></div>
                    <div className="h-8 mt-4 bg-gray-200/70 rounded-lg w-1/3 ml-auto"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg p-8 max-w-2xl mx-auto">
                <div className="text-5xl mb-4">⚠️</div>
                <h3 className="text-2xl font-semibold mb-4 text-red-500">{error}</h3>
                <p className="text-gray-600 mb-6">
                  There was a problem loading the projects. Please try again later.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                {filteredProjects.length === 0 ? (
                  <div className="text-center py-12 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg p-8 max-w-2xl mx-auto">
                    <div className="text-5xl mb-6">🔍</div>
                    <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
                    <p className="text-gray-600 mb-6">
                      There are no projects available at this time.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                      <div
                        key={project.id}
                        className="project-card bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full animate-fade-in-up"
                        style={{ 
                          transform: "perspective(1000px)",
                          transition: "transform 0.5s ease, box-shadow 0.5s ease",
                          animationDelay: `${index * 0.1}s`
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x = e.clientX - rect.left; 
                          const y = e.clientY - rect.top;
                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;
                          const rotateX = (y - centerY) / 20;
                          const rotateY = (centerX - x) / 20;
                          
                          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                        }}
                      >
                        <div className="relative h-52 overflow-hidden">
                          <OptimizedImage
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={192}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <a
                              href={project.link}
                              className="w-full backdrop-blur-md bg-white/80 text-gray-800 px-5 py-3 rounded-xl flex items-center justify-center gap-2
                                        transform translate-y-4 group-hover:translate-y-0 transition-all duration-500
                                        shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white group/btn"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>View Project</span>
                              <ExternalLinkIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </a>
                          </div>
                          {/* Category label */}
                          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-md border border-white/40">
                            {project.tags && project.tags[0]}
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags && project.tags.slice(1, 4).map((tag: string, index: number) => (
                              <span 
                                key={index} 
                                className="text-xs bg-gradient-to-br from-gray-100 to-gray-200 border border-white/50 text-gray-600 px-3 py-1 rounded-full font-medium shadow-sm hover:shadow hover:scale-105 transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{project.title}</h3>
                          <p className="text-gray-600 text-sm mb-5 flex-1 leading-relaxed">{project.description}</p>
                          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                            <span className="text-xs text-gray-600 bg-white/70 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                              {new Date(project.date || Date.now()).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})}
                            </span>
                            <a
                              href={project.link}
                              aria-label={`View ${project.title} project`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-orange-600 hover:text-orange-700 font-medium flex items-center group/link"
                            >
                              View Details
                              <ExternalLinkIcon className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-white/80 backdrop-blur-md border border-white/30 
                   text-orange-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all 
                   duration-300 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="transform group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      )}
      
      {!isSimpleMode && <Footer />}
    </div>
  );
};
