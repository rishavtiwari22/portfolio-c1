import React from 'react';
import { BriefcaseIcon, DownloadIcon } from './Icons';
import { OptimizedImage } from './OptimizedImage';
const heroImage = '/image/aaa.jpeg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="py-16 md:py-24 relative overflow-hidden w-full full-width-section">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-orange-50/20 to-purple-50/20 z-0"></div>
      
      {/* Reduced animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-2xl animate-blob" style={{animationDuration: '25s'}}></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-200/15 rounded-full blur-2xl animate-blob" style={{animationDelay: '5s', animationDuration: '30s'}}></div>
      
      {/* Simple accent elements */}
      <div className="absolute bottom-32 left-32 w-12 h-12 border-2 border-orange-500/20 rotate-12"></div>
      <div className="absolute top-40 right-80 w-8 h-8 bg-blue-500/20 rotate-45"></div>
      
      <div className="container-fluid relative z-10">
        <div className="w-full px-5 md:px-10 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="lg:max-w-xl">
                {/* Status badge - Neumorphic style */}
                <div className="inline-flex items-center backdrop-blur-sm bg-white/30 border border-white/50 rounded-full px-4 py-1.5 mb-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.1)]">
                  <span className="animate-pulse bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                  <span className="text-sm font-medium tracking-wide">Let's Build Together</span>
                </div>
                
                {/* Kinetic typography - animated gradient */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-none">
                  I'm <span className="inline-block animate-gradient-text bg-gradient-to-r bg-clip-text text-transparent from-orange-500 via-red-500 to-orange-500 bg-size-200 mb-2">Rishav Tiwari</span>,<br />
                  <span className="inline-block relative z-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent before:absolute before:content-[''] before:bg-gray-200/10 before:w-full before:h-full before:-z-10 before:left-2 before:top-2 before:skew-y-1">MERN Developer | AI-Driven Creations</span>
                </h1>
                
                {/* Glassmorphic paragraph with subtle animation */}
                <div className="relative group transition-all duration-500 mb-10">
                  <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-md bg-white/40 border border-white/30 p-5 rounded-2xl shadow-lg z-10 relative transition-all group-hover:shadow-xl">
                    A passionate MERN Stack Developer <span className="font-bold text-orange-500">3+ years</span> in Educational Innovation and Technology.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-purple-300/20 rounded-2xl blur-sm -z-0 translate-y-1 translate-x-1 group-hover:translate-y-2 group-hover:translate-x-2 transition-all duration-300"></div>
                </div>
                
                {/* Enhanced Claymorphic and Neumorphic buttons with advanced microinteractions */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="#contact"
                    className="group backdrop-blur-lg bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-500 border-2 border-orange-400 shadow-[0_15px_25px_-10px_rgba(240,140,50,0.7)] dark:shadow-[0_15px_25px_-5px_rgba(255,140,50,0.8)] hover:shadow-[0_25px_35px_-15px_rgba(240,140,50,0.8)] dark:hover:shadow-[0_25px_35px_-10px_rgba(255,140,50,0.9)] hover:-translate-y-2 flex items-center justify-center overflow-hidden relative"
                    onClick={e => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="absolute -right-20 group-hover:right-0 top-0 w-20 h-full bg-white/30 skew-x-12 transition-all duration-700"></div>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-orange-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <BriefcaseIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Connect</span>
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1s1zSUSkiRkxwL0XqbMIQ_lx7ncw_GUo-NMnO36jBf3w/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group neumorphic backdrop-blur-xl bg-white/60 border border-white/40 text-gray-800 font-bold py-4 px-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <DownloadIcon className="w-5 h-5 mr-2 group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">Download CV</span>
                  </a>
                </div>
                <div className="mt-12">
                  {/* 3D Card with Claymorphism and parallax effect */}
                  <div className="group relative perspective-1000">
                    <div className="relative backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 transform group-hover:rotate-y-3 group-hover:scale-105" 
                         style={{ backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}>
                      
                      {/* Background effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-yellow-100/30 to-orange-100/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                      
                      <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                        {/* 3D avatars with movement effect */}
                        <div className="text-gray-800 font-bold text-lg tracking-tight">
                                <span className="inline-block mr-1 animate-count-up" data-count="5">3</span> Years Experience
                              </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col">
                            {/* Animated rating */}
                            <div className="flex mb-1">
                              {[1, 2, 3, 4, 5].map((star, i) => (
                                <svg key={star} 
                                     className={`w-5 h-5 text-yellow-400 animate-pulse`} 
                                     style={{animationDelay: `${i * 0.1}s`}}
                                     fill="currentColor" 
                                     viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="ml-1 text-sm text-gray-500">5.0</span>
                            </div>
                            
                            {/* Experience counter with animated number */}
                            <div className="flex items-center">

<div className="relative flex -space-x-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          {[1, 2, ].map((i) => (
                            <div key={i} 
                                 className="w-12 h-12 rounded-full border-4 border-white/90 bg-gradient-to-br from-orange-400/90 to-orange-500/90 flex items-center justify-center overflow-hidden shadow-[0_8px_15px_rgba(0,0,0,0.2)] transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                 style={{ transform: `translateZ(${i * 5}px)` }}>
                              <span className="text-sm font-bold text-white">{i}</span>
                            </div>
                          ))}
                          <div className="w-12 h-12 rounded-full border-4 border-white/90 bg-gradient-to-br from-gray-700/90 to-gray-900/90 flex items-center justify-center overflow-hidden shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
                            <span className="text-xs font-bold text-white">+3</span>
                          </div>
                        </div>

                                
                              
                              <div className="h-8 mx-3 w-px bg-gray-300"></div>
                              <span className="py-1 px-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow-lg">Professional</span>
                            </div>
                            
                            {/* Mini progress bar */}
                            <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full animate-progress"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Simplified background elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-400/15 to-purple-400/10 rounded-full blur-lg animate-blob" style={{animationDuration: '30s'}}></div>
                
                {/* Minimal accent elements */}
                <div className="absolute -z-5 bottom-20 -right-10 w-12 h-12 border-2 border-orange-500/20 rotate-12"></div>
                
                {/* Optimized profile image container */}
                <div className="group">
                  <div className="glassmorphic bg-white/40 border border-white/30 rounded-full p-4 
                                shadow-lg transition-all duration-300 transform 
                                hover:scale-105" 
                       style={{ 
                        backdropFilter: 'blur(16px)', 
                        WebkitBackdropFilter: 'blur(16px)'
                      }}>
                    
                    {/* Simplified image container */}
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center 
                                  overflow-hidden border-2 border-white/60 shadow-lg relative">
                      <OptimizedImage 
                        src={heroImage} 
                        alt="Rishav Tiwari" 
                        width={320}
                        height={320}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Simplified floating badges */}
                <div className="absolute top-10 -right-10 backdrop-blur-sm bg-white/40 border border-white/30 px-4 py-2 rounded-lg shadow-md transform rotate-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <div className="text-orange-600 font-semibold text-sm">AIML and MERN</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 backdrop-blur-sm bg-white/40 border border-white/30 px-4 py-2 rounded-lg shadow-md transform -rotate-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <div className="text-blue-600 font-semibold text-sm">Educator</div>
                  </div>
                </div>
                
                {/* Simplified tech stack badges */}
                {/* <div className="absolute top-40 -right-12 flex flex-col gap-2">
                  {['React', 'Node.js', 'TypeScript'].map((tech) => (
                    <div key={tech} className="backdrop-blur-sm bg-gray-900/60 text-white px-3 py-1 rounded text-xs font-mono">
                      {tech}
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
