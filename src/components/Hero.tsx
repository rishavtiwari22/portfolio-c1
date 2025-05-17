import React from 'react';
import { BriefcaseIcon, DownloadIcon, ArrowRightIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="py-16 md:py-24 relative overflow-hidden w-full full-width-section">
      {/* Advanced background with enhanced blend of styles and gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-orange-50/20 to-purple-50/20 z-0"></div>
      
      {/* Enhanced animated background elements with more vibrant colors and animations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{animationDuration: '15s'}}></div>
      <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '18s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-60 h-60 bg-blue-200/20 rounded-full blur-2xl animate-blob" style={{animationDelay: '4s', animationDuration: '20s'}}></div>
      
      {/* Abstract organic shapes with subtle animation */}
      <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-300/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl animate-blob"></div>
      <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-pink-300/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl animate-blob" style={{animationDelay: '4s'}}></div>
      
      {/* Brutalist accent elements */}
      <div className="absolute bottom-32 left-32 w-16 h-16 border-4 border-orange-500/20 rotate-12"></div>
      <div className="absolute top-40 right-80 w-12 h-12 bg-blue-500/20 rotate-45"></div>
      
      <div className="container-fluid relative z-10">
        <div className="w-full px-5 md:px-10 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="lg:max-w-xl">
                {/* Status badge - Neumorphic style */}
                <div className="inline-flex items-center backdrop-blur-sm bg-white/30 border border-white/50 rounded-full px-4 py-1.5 mb-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.1)]">
                  <span className="animate-pulse bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                  <span className="text-sm font-medium tracking-wide">Available for work</span>
                </div>
                
                {/* Kinetic typography - animated gradient */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-none">
                  I'm <span className="inline-block animate-gradient-text bg-gradient-to-r bg-clip-text text-transparent from-orange-500 via-red-500 to-orange-500 bg-size-200 mb-2">John Doe</span>,<br />
                  <span className="inline-block relative z-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent before:absolute before:content-[''] before:bg-gray-200/10 before:w-full before:h-full before:-z-10 before:left-2 before:top-2 before:skew-y-1">Full-Stack Developer</span>
                </h1>
                
                {/* Glassmorphic paragraph with subtle animation */}
                <div className="relative group transition-all duration-500 mb-10">
                  <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-md bg-white/40 border border-white/30 p-5 rounded-2xl shadow-lg z-10 relative transition-all group-hover:shadow-xl">
                    A passionate developer with <span className="font-bold text-orange-500">8+ years</span> of experience creating beautiful, functional, and user-centered digital experiences.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-purple-300/20 rounded-2xl blur-sm -z-0 translate-y-1 translate-x-1 group-hover:translate-y-2 group-hover:translate-x-2 transition-all duration-300"></div>
                </div>
                
                {/* Enhanced Claymorphic and Neumorphic buttons with advanced microinteractions */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="group backdrop-blur-lg bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-500 border-2 border-orange-400 shadow-[0_15px_25px_-10px_rgba(240,140,50,0.7)] dark:shadow-[0_15px_25px_-5px_rgba(255,140,50,0.8)] hover:shadow-[0_25px_35px_-15px_rgba(240,140,50,0.8)] dark:hover:shadow-[0_25px_35px_-10px_rgba(255,140,50,0.9)] hover:-translate-y-2 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute -right-20 group-hover:right-0 top-0 w-20 h-full bg-white/30 skew-x-12 transition-all duration-700"></div>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-orange-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <BriefcaseIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Hire Me</span>
                  </button>
                  <button className="group neumorphic backdrop-blur-xl bg-white/60 border border-white/40 text-gray-800 font-bold py-4 px-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <DownloadIcon className="w-5 h-5 mr-2 group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">Download CV</span>
                  </button>
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
                        <div className="relative flex -space-x-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} 
                                 className="w-12 h-12 rounded-full border-4 border-white/90 bg-gradient-to-br from-orange-400/90 to-orange-500/90 flex items-center justify-center overflow-hidden shadow-[0_8px_15px_rgba(0,0,0,0.2)] transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                 style={{ transform: `translateZ(${i * 5}px)` }}>
                              <span className="text-sm font-bold text-white">{i}</span>
                            </div>
                          ))}
                          <div className="w-12 h-12 rounded-full border-4 border-white/90 bg-gradient-to-br from-gray-700/90 to-gray-900/90 flex items-center justify-center overflow-hidden shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
                            <span className="text-xs font-bold text-white">+24</span>
                          </div>
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
                              <div className="text-gray-800 font-bold text-lg tracking-tight">
                                <span className="inline-block mr-1 animate-count-up" data-count="8">8</span>+ Years Experience
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
                {/* 3D-like layered background with animation */}
                <div className="animate-spin-slow absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-purple-400/10 rounded-full blur-xl"></div>
                <div className="animate-pulse absolute -z-10 -bottom-4 -right-4 w-40 h-40 bg-blue-300/20 rounded-full blur-lg" style={{animationDuration: '4s'}}></div>
                <div className="animate-float absolute -z-10 -top-4 -left-4 w-32 h-32 bg-orange-400/30 rounded-full blur-md"></div>
                
                {/* Brutalism accent - bold geometric shapes */}
                <div className="absolute -z-5 bottom-20 -right-10 w-20 h-20 border-4 border-orange-500/30 rotate-12"></div>
                <div className="absolute -z-5 -top-10 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md rotate-45 animate-float" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
                
                {/* Enhanced profile image with advanced glassmorphism, claymorphism, and neumorphism combo */}
                <div className="group perspective-1000">
                  <div className="glassmorphic backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/20 border border-white/40 rounded-full p-5 
                                shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition-all duration-700 transform 
                                hover:rotate-y-15 hover:scale-105 hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]" 
                       style={{ 
                        backdropFilter: 'blur(20px)', 
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: 'inset 5px 5px 15px rgba(255,255,255,0.3), inset -5px -5px 15px rgba(0,0,0,0.1)'
                      }}>
                    {/* Multiple inner rings with animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-300/40 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full border-2 border-dashed border-blue-300/30 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '30s'}}></div>
                    <div className="absolute inset-4 rounded-full border-1 border-dotted border-purple-300/20 animate-spin-slow" style={{animationDuration: '25s'}}></div>
                    
                    {/* Enhanced image container with glow effects */}
                    <div className="bg-gradient-to-br from-orange-400/90 to-orange-500/90 rounded-full w-80 h-80 flex items-center justify-center 
                                  overflow-hidden border-4 border-white/60 shadow-[inset_0_0_30px_rgba(0,0,0,0.25)] 
                                  glow-orange relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <img 
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="John Doe" 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating badges with 3D and neumorphism effects */}
                <div className="absolute top-10 -right-10 backdrop-blur-md bg-white/40 border border-white/30 px-5 py-3 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.2)] transform rotate-6 animate-float">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                    <div className="text-orange-600 font-bold tracking-wide">Full-Stack</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 backdrop-blur-md bg-white/40 border border-white/30 px-5 py-3 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.2)] transform -rotate-6 animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                    <div className="text-blue-600 font-bold tracking-wide">Designer</div>
                  </div>
                </div>
                
                {/* Tech stack badges - Minimal style */}
                <div className="absolute top-40 -right-12 flex flex-col gap-3">
                  {['React', 'Node.js', 'TypeScript'].map((tech, i) => (
                    <div key={tech} className="backdrop-blur-sm bg-gray-900/40 text-white px-3 py-1 rounded-md text-xs font-mono animate-fade-in-right" style={{animationDelay: `${i * 0.3}s`}}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};