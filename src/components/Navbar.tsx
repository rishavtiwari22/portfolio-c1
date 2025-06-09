import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Check if we're on the blog page
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll for navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Handle active section detection (scroll spy)
      const sections = ['home', 'services', 'experience', 'portfolio', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled 
          ? 'py-2 backdrop-blur-xl glassmorphic bg-white/60 shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between px-4 md:px-8 xl:px-12">
          {/* Logo with 3D effect */}
          <div className="flex items-center group">
            <div className="relative">
              <span className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-sm transform group-hover:scale-110 transition-transform duration-300"></span>
              <span className="relative bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-300">JD</span>
            </div>
            <div className="ml-3">
              <span className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent transform transition-all duration-300">Projects</span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-5">
            {/* Desktop Navigation with glassmorphic active indicators */}
            <nav className="hidden md:flex">
              <div className="flex space-x-1 backdrop-blur-xl glassmorphic-light border border-white/30 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
                {['Home', 'Services', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => {
                  const isActive = activeSection === (item === 'Projects' ? 'portfolio' : item.toLowerCase()) || (item === 'Blog' && isBlogPage);
                  const sectionId = item === 'Projects' ? 'portfolio' : item.toLowerCase();
                  
                  if (item === 'Blog') {
                    return (
                      <a
                        key={item}
                        href={isBlogPage ? "/" : "/#blog"}
                        onClick={(e) => {
                          if (isBlogPage) {
                            // Navigate home first
                          } else {
                            // Smooth scroll to blog section
                            e.preventDefault();
                            document.getElementById('blog')?.scrollIntoView({
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                          isActive 
                            ? 'text-white' 
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        {/* Active background pill with animation */}
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full z-0 animate-fade-in-right"></span>
                        )}
                        <span className="relative z-10">{item}</span>
                      </a>
                    );
                  }
                  
                  return (
                    <a 
                      key={item} 
                      href={`#${sectionId}`}
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {/* Active background pill with animation */}
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full z-0 animate-fade-in-right"></span>
                      )}
                      <span className="relative z-10">{item}</span>
                    </a>
                  );
                })}
              </div>
            </nav>
            
         
            {/* Mobile Menu Button with animation */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center border border-white/20 transition-all duration-300 hover:shadow-lg"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block h-0.5 rounded-full bg-gray-800 transform transition-all duration-300 ${isOpen ? 'w-6 top-3 -rotate-45' : 'w-5 top-2'}`}></span>
                <span className={`absolute left-0 block w-6 h-0.5 rounded-full bg-gray-800 top-3 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 block h-0.5 rounded-full bg-gray-800 transform transition-all duration-300 ${isOpen ? 'w-6 top-3 rotate-45' : 'w-4 top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Full-screen Mobile Navigation with animation */}
      <div 
        className={`fixed inset-0 z-40 transform transition-all duration-500 ${
          isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
        } md:hidden`}
        style={{
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          minHeight: '100vh',
          height: '100%'
        }}
      >
        <div className="container min-h-screen h-full flex flex-col items-center justify-center px-4">
          {/* Abstract decorations */}
          <div className="absolute top-10 right-10 w-60 h-60 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
          
          {/* Links with staggered animation */}
          <div className="flex flex-col items-center space-y-8 relative z-10 bg-transparent py-8">
            {['Home', 'Services', 'Experience', 'Projects', 'Blog', 'Contact'].map((item, index) => {
              const isActive = activeSection === (item === 'Projects' ? 'portfolio' : item.toLowerCase()) || (item === 'Blog' && isBlogPage);
              
              if (item === 'Blog') {
                return (
                  <a
                    key={item}
                    href="#blog"
                    className={`relative text-2xl font-bold transition-all duration-300 px-8 py-3 overflow-hidden group animate-fade-in-right backdrop-blur-none bg-transparent hover:scale-105`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    onClick={() => {
                      setIsOpen(false);
                      const element = document.getElementById('blog');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className={`relative z-10 ${isActive ? 'bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent' : 'text-gray-800'}`}>
                      {item}
                    </span>
                    {/* Animated underline with glow */}
                    <span className={`absolute bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 group-hover:w-full ${isActive ? 'w-full shadow-lg' : ''}`}></span>
                  </a>
                );
              }
              
              return (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-2xl font-bold transition-all duration-300 px-8 py-3 overflow-hidden group animate-fade-in-right backdrop-blur-none bg-transparent hover:scale-105`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  onClick={() => {
                    setIsOpen(false);
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className={`relative z-10 ${isActive ? 'bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent' : 'text-gray-800'}`}>
                    {item}
                  </span>
                  {/* Animated underline with glow */}
                  <span className={`absolute bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 group-hover:w-full ${isActive ? 'w-full shadow-lg' : ''}`}></span>
                </a>
              );
            })}
          </div>
          
          {/* Social icons */}
          <div className="absolute bottom-10 flex space-x-6">
            {['twitter', 'instagram', 'github', 'linkedin'].map(platform => (
              <a 
                key={platform} 
                href="#" 
                className="w-12 h-12 rounded-xl backdrop-blur-xl bg-white/40 border border-white/40 flex items-center justify-center text-gray-800 transition-all duration-300
                         hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:text-white hover:-translate-y-1 hover:shadow-lg
                         hover:border-transparent group"
              >
                <span className="sr-only">{platform}</span>
                <svg 
                  className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};