import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll for navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Handle active section detection (scroll spy)
      const sections = ['home', 'services', 'experience', 'portfolio', 'testimonials', 'contact'];
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
  
  // Initialize dark mode on component mount
  useEffect(() => {
    // Check if user previously set dark mode preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.style.colorScheme = 'dark';
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.style.colorScheme = 'light';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled 
          ? 'py-2 backdrop-blur-xl glassmorphic bg-white/60 dark:bg-gray-900/60 shadow-lg dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
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
              <span className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transform transition-all duration-300">Portfolio</span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-5">
            {/* Desktop Navigation with glassmorphic active indicators */}
            <nav className="hidden md:flex">
              <div className="flex space-x-1 backdrop-blur-xl glassmorphic-light dark:bg-gray-800/20 border border-white/30 dark:border-white/10 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                {['Home', 'Services', 'Experience', 'Portfolio', 'Testimonials', 'Contact'].map((item) => {
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`}
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
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

            {/* Enhanced Dark mode toggle with advanced glassmorphic effects */}
            <button 
              onClick={toggleDarkMode}
              className="relative w-14 h-7 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 dark:from-indigo-900 dark:to-purple-900 transition-all duration-500 focus:outline-none shadow-md overflow-hidden border border-white/30 dark:border-white/10 hover:shadow-lg group backdrop-blur-sm"
              aria-label="Toggle dark mode"
            >
              <span className="sr-only">Toggle dark mode</span>
              
              {/* Sun and moon icons background */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-between px-1.5">
                <span className="text-yellow-500 text-xs z-10">☀</span>
                <span className="text-indigo-300 text-xs z-10">☾</span>
              </div>
              
              {/* Enhanced stars that appear in dark mode with glow */}
              <div className={`absolute inset-0 transition-all duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                <span className="absolute top-1 left-3 text-[8px] text-yellow-200">
                  <span className="absolute inset-0 w-full h-full bg-yellow-300/30 blur-sm rounded-full animate-pulse" style={{animationDuration: '3s'}}></span>
                  ✦
                </span>
                <span className="absolute bottom-1 left-8 text-[6px] text-yellow-200">
                  <span className="absolute inset-0 w-full h-full bg-yellow-300/20 blur-sm rounded-full animate-pulse" style={{animationDuration: '4s'}}></span>
                  ✦
                </span>
                <span className="absolute top-2 left-10 text-[7px] text-yellow-200">
                  <span className="absolute inset-0 w-full h-full bg-yellow-300/40 blur-sm rounded-full animate-pulse" style={{animationDuration: '2.5s'}}></span>
                  ✦
                </span>
              </div>
              
              {/* Moving toggle indicator with enhanced glassmorphic effects */}
              <div 
                className={`absolute top-1 w-5 h-5 rounded-full shadow-md transform transition-all duration-500 flex items-center justify-center group-hover:scale-110 
                  ${
                    isDarkMode ? 
                    'translate-x-8 bg-gradient-to-br from-gray-800 to-gray-900 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1)]' : 
                    'left-1 bg-gradient-to-br from-white to-gray-100 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8)]'
                  }`}
              >
                {/* Icon inside toggle with enhanced glow */}
                <span className={`text-xs ${isDarkMode ? 'text-yellow-300' : 'text-orange-500'} animate-subtle-pulse drop-shadow-sm relative z-10`}>
                  {isDarkMode ? '☾' : '☀'}
                </span>
                
                {/* Enhanced glow effect */}
                <span className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-yellow-500/20' : 'bg-orange-500/20'} blur-md animate-pulse transition-all duration-500`}></span>
              </div>
              
              {/* Enhanced background effect that changes with mode */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                isDarkMode ? 
                'from-indigo-700/50 via-purple-700/50 to-indigo-700/50 opacity-100' : 
                'from-orange-300/20 via-amber-300/20 to-orange-300/20 opacity-0'
              } rounded-full transition-all duration-500`}></div>
              
              {/* Subtle neumorphic inner shadow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_1px_1px_1px_rgba(255,255,255,0.3),inset_-1px_-1px_1px_rgba(0,0,0,0.1)] opacity-50"></div>
            </button>
            
            {/* Login button with advanced glassmorphism and neumorphism */}
            <Link 
              to="/login"
              className="relative overflow-hidden group backdrop-blur-xl px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                        bg-gradient-to-r from-orange-500/90 via-orange-600/90 to-red-500/90 text-white
                        shadow-[0_8px_20px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_rgba(0,0,0,0.1)]
                        dark:shadow-[0_8px_20px_rgba(0,0,0,0.2),inset_1px_1px_1px_rgba(255,255,255,0.2),inset_-1px_-1px_1px_rgba(0,0,0,0.2)]
                        border border-white/20 dark:border-white/10"
            >
              {/* Inner highlight effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"></span>
              
              {/* Animated glow on hover */}
              <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0
                            transform -skew-x-12 group-hover:w-full transition-all duration-700
                            blur-md"></span>
                            
              {/* Text with shadow */}
              <span className="relative z-10 drop-shadow-sm flex items-center">
                <span>Admin</span>
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            
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
        className={`fixed inset-0 z-40 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 transform transition-transform duration-500 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } md:hidden`}
      >
        <div className="container h-full flex flex-col items-center justify-center px-4">
          {/* Abstract decoration */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '5s'}}></div>
          
          {/* Links with staggered animation */}
          <div className="flex flex-col items-center space-y-6 relative z-10">
            {['Home', 'Services', 'Experience', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-2xl font-bold transition-all duration-300 px-6 py-2 overflow-hidden group animate-fade-in-right`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`relative z-10 ${isActive ? 'bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent' : 'text-gray-800 dark:text-white'}`}>
                    {item}
                  </span>
                  {/* Animated underline */}
                  <span className={`absolute bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
                </a>
              );
            })}
          </div>
          
          {/* Social icons */}
          <div className="absolute bottom-10 flex space-x-4">
            {['twitter', 'instagram', 'github', 'linkedin'].map(platform => (
              <a 
                key={platform} 
                href="#" 
                className="w-10 h-10 rounded-full backdrop-blur-md bg-white/30 border border-white/30 flex items-center justify-center text-gray-800 transition-all hover:bg-orange-500 hover:text-white hover:-translate-y-1"
              >
                <span className="sr-only">{platform}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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