import React, { useEffect, useState, useRef } from 'react';

export const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<any[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use async function for better error handling and performance
    const fetchExperiences = async () => {
      try {
        const res = await fetch('/data/content.json');
        if (!res.ok) throw new Error('Failed to fetch experiences');
        const data = await res.json();
        setExperiences(data.experience || []);
        
        // Wait for the next frame to ensure state is updated
        requestAnimationFrame(() => {
          // Add scroll animation observer for timeline items
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const element = entry.target as HTMLElement;
                const isLeft = element.dataset.position === 'left';
                
                // Trigger the animation
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
                
                // Animate the nested timeline card with a slight delay
                const card = element.querySelector('.timeline-card') as HTMLElement;
                if (card) {
                  setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) rotateY(0)';
                  }, 200);
                }
              }
            });
          }, { 
            threshold: 0.2,
            rootMargin: "0px 0px -10% 0px"
          });
          
          observerRef.current = observer;
          
          // Initialize timeline items with correct starting positions
          const timelineItems = document.querySelectorAll('.timeline-item');
          timelineItems.forEach((el, index) => {
            const isLeft = index % 2 === 0;
            const element = el as HTMLElement;
            element.dataset.position = isLeft ? 'left' : 'right';
            element.style.transform = `translateX(${isLeft ? '-50px' : '50px'})`;
            element.style.opacity = '0';
            element.style.transition = 'transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1), opacity 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)';
            
            // Initialize the timeline card
            const card = element.querySelector('.timeline-card') as HTMLElement;
            if (card) {
              card.style.transform = 'translateY(20px) rotateY(3deg)';
              card.style.opacity = '0';
              card.style.transition = 'transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1), opacity 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)';
            }
            
            observer.observe(element);
          });
        });
      } catch (error) {
        console.error('Error loading experiences:', error);
      }
    };

    fetchExperiences();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-gray-100/30 to-orange-50/20 relative overflow-hidden w-full max-w-full">
      {/* Enhanced background elements with dynamic animations */}
      <div className="absolute top-40 -right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '0s'}}></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '6s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '9s'}}></div>
      
      {/* Enhanced brutalist geometric elements */}
      <div className="absolute top-20 left-20 w-32 h-8 bg-orange-400/30 transform rotate-45 backdrop-blur-sm"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 border-4 border-blue-400/30 transform -rotate-12 backdrop-blur-sm"></div>
      <div className="absolute top-60 right-40 w-16 h-16 bg-pink-400/20 transform rotate-12 backdrop-blur-sm"></div>
      <div className="absolute bottom-80 left-40 w-12 h-12 border-2 border-purple-400/30 transform rotate-45 backdrop-blur-sm"></div>
      
      <div className="container-fluid relative z-10">
        <div className="w-full px-4 md:px-8 xl:px-12">
          <div className="mb-20 text-center">
            <div className="inline-block bg-orange-50 border border-orange-100 rounded-lg px-5 py-2 mb-4 shadow-sm">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text font-medium animate-gradient-text bg-size-200 uppercase tracking-wider text-sm">Professional Journey</span>
            </div>
            
            {/* Professional modern heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300">My</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.1s'}}>Work</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.2s'}}>Experience</span>
            </h2>
            
            <div className="relative">
              <p className="text-gray-700 max-w-2xl mx-auto bg-white/90 p-6 rounded-xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] transform hover:shadow-xl hover:scale-[1.01] transition-all duration-500 leading-relaxed">
                I have worked with various companies and clients, gaining valuable experience and skills along the way.
              </p>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-70"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Timeline track - glassmorphic professional design - repositioned to be below the nodes */}
            <div className="absolute left-0 md:left-1/2 top-12 h-[calc(100%-12px)] w-1 md:w-[4px]
                           bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 
                           shadow-[0_0_15px_rgba(249,115,22,0.4)] z-0
                           backdrop-blur-sm">
              {/* Animated light points along the timeline */}
              <div className="absolute inset-0 h-full">
                <div className="absolute top-0 left-0 right-0 h-20 w-full 
                              bg-gradient-to-b from-orange-500 to-transparent animate-pulse rounded-full" 
                    style={{animationDuration: '4s'}}></div>
                <div className="absolute top-1/4 -translate-y-1/2 left-0 right-0 h-20 w-full 
                              bg-gradient-to-b from-orange-500 to-transparent animate-pulse rounded-full"
                    style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                <div className="absolute top-2/4 -translate-y-1/2 left-0 right-0 h-20 w-full 
                              bg-gradient-to-b from-orange-500 to-transparent animate-pulse rounded-full"
                    style={{animationDuration: '4s', animationDelay: '2s'}}></div>
                <div className="absolute top-3/4 -translate-y-1/2 left-0 right-0 h-20 w-full 
                              bg-gradient-to-b from-orange-500 to-transparent animate-pulse rounded-full"
                    style={{animationDuration: '4s', animationDelay: '3s'}}></div>
              </div>
              
              {/* Enhanced glow effect for better visibility */}
              <div className="absolute inset-0 opacity-70 blur-md
                            bg-gradient-to-b from-orange-400 via-orange-300 to-transparent"></div>
              
              {/* Refined outer glow for dark mode visibility - adjusted size */}
              <div className="absolute inset-0 opacity-40 blur-md -z-10 w-4 md:w-5 -left-1.5 md:-left-1.5
                            bg-orange-400/20 dark:bg-orange-500/30"></div>
            </div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item relative md:pl-0 pl-8 pb-14 group" style={{perspective: '1000px'}}>                {/* Timeline node - glassmorphic + neumorphic design - Positioned above timeline */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-px left-0 top-0 z-30">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 
                                shadow-[0_0_25px_rgba(249,115,22,0.5)] dark:shadow-[0_0_30px_rgba(249,115,22,0.45)]
                                border-[5px] border-white/80 dark:border-gray-800/90 transition-all duration-500
                                flex items-center justify-center transform backdrop-blur-sm
                                group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] group-hover:rotate-6
                                mt-0">
                    {/* Glass effect overlay */}
                    <span className="absolute inset-0 rounded-full bg-white/20 dark:bg-white/10"></span>
                    
                    {/* Number indicator with enhanced styling */}
                    <span className="text-white text-2xl font-bold relative z-10 drop-shadow-lg">{index + 1}</span>
                    
                    {/* Inner glow effect - enhanced with neumorphism */}
                    <span className="absolute inset-2 rounded-full bg-gradient-to-tl from-white/40 to-transparent blur-md"></span>
                    <span className="absolute inset-[6px] rounded-full border border-white/40 dark:border-white/20"></span>
                    
                    {/* Outer pulse animation rings with improved visibility */}
                    <span className="absolute -inset-2 rounded-full bg-orange-400/40 transform scale-100 animate-ping" 
                          style={{animationDuration: '3s', animationDelay: `${index * 0.5}s`}}></span>
                    <span className="absolute -inset-4 rounded-full bg-orange-300/30 transform scale-100 animate-ping" 
                          style={{animationDuration: '4s', animationDelay: `${index * 0.3}s`}}></span>
                    <span className="absolute -inset-6 rounded-full bg-orange-200/10 transform scale-100 animate-ping" 
                          style={{animationDuration: '5s', animationDelay: `${index * 0.2}s`}}></span>
                                  
                    {/* Extra outer glow for better visibility in dark mode */}
                    <span className="absolute -inset-2 rounded-full bg-orange-500/30 dark:bg-orange-400/40 blur-xl"></span>
                  </div>
                </div>
                
                {/* Content card with enhanced professional design, wider width and more modern styling */}
                <div 
                  className={`timeline-card md:w-[calc(48%-1rem)] ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:ml-8 md:mr-auto'} 
                          bg-gradient-to-br from-white/90 to-white/70
                          border border-white/60
                          rounded-2xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 
                          group-hover:shadow-[0_25px_50px_0_rgba(255,140,0,0.25)] transform 
                          group-hover:scale-[1.03] group-hover:translate-y-[-5px] relative overflow-hidden mt-6 md:mt-0`}
                  style={{ 
                    opacity: 0,
                    backdropFilter: 'blur(16px)', 
                    WebkitBackdropFilter: 'blur(16px)',
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateY(${index % 2 ? '0.8' : '-0.8'}deg) translateZ(8px)`,
                    boxShadow: index % 2 ? 
                      'inset 3px 3px 10px rgba(255,255,255,0.2), inset -3px -3px 10px rgba(0,0,0,0.05)' : 
                      'inset -3px 3px 10px rgba(255,255,255,0.2), inset 3px -3px 10px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Background pattern - abstract graphic element */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-300/5 to-blue-200/5 
                               rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
                  
                  {/* Brutalist accent */}
                  <div className="absolute bottom-4 left-4 w-12 h-2 bg-orange-400/30 z-0"></div>
                  <div className="absolute top-8 right-8 w-4 h-8 bg-blue-400/20 z-0 rotate-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5">
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent 
                                    transition-all duration-300 group-hover:from-orange-700 group-hover:to-red-700
                                    drop-shadow-sm tracking-tight">
                        {exp.position}
                      </h3>
                      
                      {/* Professional period badge */}
                      <span className="text-sm font-semibold bg-orange-50 text-orange-700 px-4 py-1.5 
                                     rounded-lg mt-2 sm:mt-0 border border-orange-200/50 shadow-sm transform 
                                     group-hover:translate-y-[-2px] transition-transform duration-300">
                        {exp.period}
                      </span>
                    </div>
                    
                    {/* Modern professional company badge */}
                    <div className="flex items-center mb-5 px-0 py-0
                                  gap-1.5
                                  transform group-hover:translate-x-1 transition-transform duration-300">
                      <div className="font-medium text-gray-800 text-base relative flex items-center">
                        <svg className="w-5 h-5 mr-1.5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5z" clipRule="evenodd" />
                        </svg>
                        <span className="relative">
                          {exp.company}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500
                                        group-hover:w-full transition-all duration-500"></span>
                        </span>
                      </div>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                    
                    {/* Description with professional typography and better readability */}
                    <div className="relative">
                      <p className="text-gray-700 relative text-base leading-relaxed mb-1 pl-3 border-l-2 border-orange-300">
                        {exp.description}
                      </p>
                      
                      {/* Professional highlight effect */}
                      <div className="absolute -bottom-2 -right-3 w-32 h-10 bg-orange-100/20 dark:bg-orange-500/15 blur-xl rounded-full transform 
                                    scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                    </div>
                    
                    {/* Skill badges - Modern professional design */}
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.skills.map((skill: string, i: number) => (
                          <span key={i} 
                                className="text-xs font-medium bg-gradient-to-r from-orange-50 to-orange-50/80 
                                         text-orange-700
                                         px-3 py-1.5 rounded-md shadow-sm
                                         border border-orange-100
                                         transform transition-all duration-300 
                                         hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-md"
                                style={{transitionDelay: `${i * 50}ms`}}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats section with glassmorphism and neumorphism */}
          <div className="mt-24 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-10 perspective-1000">
              <div className="bg-white/70 text-gray-800
                          px-12 py-6 rounded-2xl font-medium 
                          border border-white/50
                          shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.05)] 
                          backdrop-blur-md
                          transform hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"></div>
                
                <span className="text-4xl font-bold animate-count-up block mb-2 bg-gradient-to-r from-orange-600 to-red-600 
                              bg-clip-text text-transparent drop-shadow-sm">8+</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700 
                              transition-colors uppercase tracking-wider">Years Experience</span>
              </div>
              
              <div className="hidden md:flex items-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-400 shadow-lg"></div>
                <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-transparent shadow-sm"></div>
              </div>
              
              <div className="bg-white/70 text-gray-800
                          px-12 py-6 rounded-2xl font-medium 
                          border border-white/50
                          shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.05)] 
                          backdrop-blur-md
                          transform hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"></div>
                
                <span className="text-4xl font-bold animate-count-up block mb-2 bg-gradient-to-r from-orange-600 to-red-600 
                              bg-clip-text text-transparent drop-shadow-sm">50+</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700 
                              transition-colors uppercase tracking-wider">Projects</span>
              </div>
              
              <div className="hidden md:flex items-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-400 shadow-lg"></div>
                <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-transparent shadow-sm"></div>
              </div>
              
              <div className="bg-white/70 text-gray-800
                          px-12 py-6 rounded-2xl font-medium 
                          border border-white/50
                          shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.05)] 
                          backdrop-blur-md
                          transform hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"></div>
                
                <span className="text-4xl font-bold animate-count-up block mb-2 bg-gradient-to-r from-orange-600 to-red-600 
                              bg-clip-text text-transparent drop-shadow-sm">30+</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700 
                              transition-colors uppercase tracking-wider">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};