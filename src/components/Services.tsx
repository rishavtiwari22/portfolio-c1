import React, { useEffect, useState } from 'react';
import { CodeIcon, PaintbrushIcon, LayoutIcon } from './Icons';

const iconMap: Record<string, JSX.Element> = {
  code: <CodeIcon className="w-8 h-8" />,
  paintbrush: <PaintbrushIcon className="w-8 h-8" />,
  layout: <LayoutIcon className="w-8 h-8" />,
};

export const Services: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: 'Big Data Analytics',
        icon: 'code',
        description: 'Participated in the Ninth International Conference on Big Data Analytics (BDA 2021) held at IIIT Allahabad, Prayagraj from 15–18 December 2021, gaining insights into advanced research and developments in big data technologies.',
        image: 'https://drive.google.com/file/d/1fQIRlc6g0D3Om09osMFR2HhTo3IFHSQk/view?usp=drive_link',
      },
      {
        id: 2,
        title: 'GIS in Supply Chain (ISRO, 2021)',
        icon: 'layout',
        description: 'Completed online course on "GIS for Supply Chain Management" conducted by ISRO–IIRS from 26th to 30th April 2021 (10.5 hours) through VBS Purvanchal University, Jaunpur.',
        image: 'https://drive.google.com/file/d/1Tvu0zITfc4E0yeaJx0CJd9OhcibSvDbi/view?usp=drive_link',
      },
      {
        id: 3,
        title: 'Speaker Verification Internship – IIIT Allahabad',
        icon: 'paintbrush',
        description: 'Completed a summer internship on "Mel Spectrogram Based Speaker Verification" at IIIT Allahabad under Dr. Ramesh Kumar Bhukya (May–July 2021).',
        image: 'https://drive.google.com/file/d/1ACgTrzc8PK4FjMqMu35lWLtImyS-UrKc/view?usp=drive_link',
      },
    ]);
  }, []);

  return (
    <section id="certificate" className="py-16 md:py-24 relative overflow-hidden w-full max-w-full">
      {/* Advanced layered background with enhanced glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-orange-50/15 to-purple-50/20 z-0"></div>

      {/* Enhanced animated background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>

      {/* Enhanced animated organic shapes */}
      <div className="absolute top-1/2 left-10 w-48 h-48 bg-blue-300/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-pink-300/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-xl animate-blob" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/4 right-1/2 w-40 h-40 bg-orange-300/15 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] blur-xl animate-blob" style={{ animationDelay: '6s' }}></div>

      {/* Enhanced brutalist accent elements with improved visibility */}
      <div className="absolute bottom-40 left-40 w-20 h-20 border-4 border-orange-500/40 rotate-12 animate-float shadow-lg" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-32 right-32 w-16 h-16 bg-blue-500/30 rotate-45 animate-float shadow-md" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-80 right-80 w-12 h-12 border-2 border-purple-500/30 -rotate-12 animate-float shadow-sm" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>

      <div className="container-fluid relative z-10">
        <div className="w-full px-4 md:px-8 xl:px-12">
          {/* Enhanced kinetic typography header section with glassmorphism */}
          <div className="mb-20 text-center">
            <div className="inline-block perspective-1000 group mb-6 relative">
              <div className="transform group-hover:rotate-y-15 transition-all duration-700">
                <div className="inline-block backdrop-blur-md bg-white/40 border border-white/50 rounded-full px-6 py-2.5 shadow-lg overflow-hidden relative">
                  {/* Background glow effects */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-red-400/10 to-purple-500/20 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <span className="animate-gradient-text bg-size-200 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 
                                text-transparent bg-clip-text font-semibold tracking-wider text-sm uppercase relative z-10">
                    Certifications & Expertise:
                  </span>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-4 w-6 h-6 border border-orange-400/30 rounded-md rotate-12 animate-float"
                style={{ animationDuration: '6s' }}></div>
              <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-purple-400/20 rounded-full animate-float"
                style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight relative">
              <span className="inline-block animate-gradient-text bg-size-200 bg-gradient-to-r 
                            from-gray-800 via-gray-900 to-black
                            bg-clip-text text-transparent drop-shadow-sm perspective-1000 transform transition-all duration-500
                            hover:scale-[1.03]">
                Certifications
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1.5 w-32 bg-gradient-to-r 
                           from-orange-500 to-red-500
                           rounded-full shadow-lg"></div>

              {/* Extra glow effect */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 w-40 bg-gradient-to-r 
                           from-orange-400/40 to-red-400/40
                           rounded-full blur-md"></div>
            </h2>

            <div className="relative group max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg backdrop-blur-md 
                         bg-white/50 p-7 rounded-2xl border border-white/30
                         shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                         z-10 relative transition-all group-hover:shadow-xl">
                Certified in various industry-relevant skills to support innovation, efficiency, and professional growth.
              </p>

              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 via-purple-300/10 to-blue-300/20 
                           rounded-2xl blur-md -z-10 transform group-hover:scale-105 transition-transform duration-500"></div>

              {/* Neumorphic shadow effects */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] 
                           opacity-50 z-20 pointer-events-none"></div>
            </div>
          </div>                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="backdrop-blur-xl bg-white/60 border border-white/40 
                         rounded-2xl overflow-hidden 
                         shadow-[0_10px_30px_0_rgba(31,38,135,0.07),inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.05)] 
                         hover:shadow-[0_15px_35px_0_rgba(255,140,0,0.2),inset_1px_1px_3px_rgba(255,255,255,0.5),inset_-1px_-1px_3px_rgba(0,0,0,0.1)] 
                         transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] group perspective-1000"
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Enhanced glassmorphism background with 3D gradient overlay */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-purple-300/20 to-blue-300/30 
                               z-0 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Enhanced animated background blur elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400/40
                               rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700
                               animate-pulse"></div>
                  <div className="absolute -top-5 -left-5 w-32 h-32 bg-purple-400/30
                               rounded-full blur-xl group-hover:blur-2xl transition-all duration-700
                               animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
                  <div className="absolute bottom-10 left-20 w-16 h-16 bg-blue-400/20
                               rounded-full blur-lg group-hover:blur-xl transition-all duration-700
                               animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>

                  <img
                    src={service.image}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 
                            opacity-85 group-hover:opacity-90"
                  />

                  {/* Enhanced glassmorphism badge with advanced effects */}
                  <div className="absolute top-4 left-4 backdrop-blur-lg bg-white/20
                               border border-white/30 text-white 
                               text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg
                               transform group-hover:translate-y-1 group-hover:translate-x-1 
                               transition-transform duration-500 overflow-hidden">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <span className="relative">{service.title}</span>
                  </div>

                  {/* Brutalist accent element */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/40 
                               transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-700"></div>
                </div>

                <div className="p-5 backdrop-blur-lg bg-white/70 flex-1 flex flex-col 
                             relative z-10 border-t border-white/30">
                  {/* Enhanced floating icon with advanced glass effect */}
                  <div className="w-20 h-20 rounded-full backdrop-blur-lg 
                               bg-gradient-to-br from-orange-400 to-orange-500
                               flex items-center justify-center text-white 
                               shadow-[0_8px_20px_rgba(0,0,0,0.15),inset_1px_1px_3px_rgba(255,255,255,0.4),inset_-1px_-1px_3px_rgba(0,0,0,0.1)]
                               -mt-14 mb-6 border border-white/40
                               transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    {/* Animated inner highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-white/30 to-transparent opacity-70"></div>
                    <div className="absolute -inset-full bg-gradient-to-tr from-white/40 to-transparent blur-md 
                                transform rotate-45 translate-x-[200%] translate-y-[100%] group-hover:translate-x-[0%] group-hover:translate-y-[0%] 
                                transition-transform duration-1000 z-0"></div>

                    {/* Service icon with enhanced styling */}
                    <div className="relative z-10 w-10 h-10 text-white/90">
                      {iconMap[service.icon]}
                    </div>
                  </div>

                  {/* Enhanced content with better typography and effects */}
                  <h3 className="text-2xl font-bold mb-4 
                              transform transition-transform duration-300 group-hover:translate-x-1
                              bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-orange-700/90 to-gray-700">{service.title}</h3>

                  <p className="text-gray-600 mb-5 flex-1 leading-relaxed
                             pl-4 border-l-2 border-orange-400/50 bg-white/30 p-3 rounded-r-lg">{service.description}</p>

                  {/* Enhanced glass button with advanced effects */}
                  <a
                    href={service.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-6 py-3 rounded-xl backdrop-blur-lg 
                      bg-gradient-to-r from-white/70 to-white/50
                      border border-orange-300/30
                      text-orange-600 font-medium 
                      flex items-center justify-between w-full transition-all duration-500
                      shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_1px_1px_2px_rgba(255,255,255,0.4)]
                      hover:shadow-[0_8px_20px_rgba(255,140,0,0.3),inset_1px_1px_3px_rgba(255,255,255,0.6)]
                      group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 
                      group-hover:text-white group-hover:border-orange-500/60 relative overflow-hidden
                      hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-300/10 to-orange-300/10 
                      group-hover:from-orange-300/20 group-hover:to-orange-300/40 transition-colors duration-500"></div>
                    <span className="relative z-10">View Certificate</span>
                    <svg
                      className="w-5 h-5 ml-1 transition-all transform relative z-10
                        group-hover:translate-x-2 group-hover:scale-110 duration-500"
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};