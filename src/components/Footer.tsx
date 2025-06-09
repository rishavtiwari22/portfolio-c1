import React from 'react';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-16 w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/80 to-orange-500/0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
      
      {/* Brutalist accents */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-orange-500/20 rotate-45"></div>
      <div className="absolute bottom-40 right-20 w-8 h-32 bg-orange-500/10"></div>
      
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8 xl:px-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6 group">
              <div className="relative mr-3">
                <span className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-500 rounded-full blur-sm transform group-hover:scale-110 transition-transform duration-300"></span>
                <span className="relative bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-300 border border-white/20">JD</span>
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transform transition-all duration-300">Projects</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <p className="text-gray-300 leading-relaxed">
                A passionate developer creating beautiful, functional, and user-centered digital experiences.
              </p>
            </div>
            
            {/* Social Media Icons Grid */}
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
                        w-10 h-10 rounded-xl flex items-center justify-center
                        shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
                        hover:shadow-[0_6px_15px_rgba(255,140,0,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
                        transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
                        border border-white/10 hover:border-orange-500/30 hover:text-white"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
                        w-10 h-10 rounded-xl flex items-center justify-center
                        shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
                        hover:shadow-[0_6px_15px_rgba(0,116,230,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
                        transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
                        border border-white/10 hover:border-blue-500/30 hover:text-blue-400"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
                        w-10 h-10 rounded-xl flex items-center justify-center
                        shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
                        hover:shadow-[0_6px_15px_rgba(29,161,242,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
                        transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
                        border border-white/10 hover:border-blue-400/30 hover:text-blue-400"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
                        w-10 h-10 rounded-xl flex items-center justify-center
                        shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
                        hover:shadow-[0_6px_15px_rgba(225,48,108,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
                        transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
                        border border-white/10 hover:border-pink-500/30 hover:text-pink-400"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
                        w-10 h-10 rounded-xl flex items-center justify-center
                        shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
                        hover:shadow-[0_6px_15px_rgba(255,0,0,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
                        transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
                        border border-white/10 hover:border-red-500/30 hover:text-red-400"
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Discord */}
              <a 
                href="https://discord.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
                        w-10 h-10 rounded-xl flex items-center justify-center
                        shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
                        hover:shadow-[0_6px_15px_rgba(114,137,218,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
                        transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
                        border border-white/10 hover:border-indigo-500/30 hover:text-indigo-400"
              >
                <span className="sr-only">Discord</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </div>

            {/* Social Media Title */}
            <div className="mt-4 mb-2">
              <h4 className="text-sm font-medium text-gray-300 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Connect with me
              </h4>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,140,0,0.07)] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent inline-block">Pages</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Experience', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/70 mr-2 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,140,0,0.1)] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-5 bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent inline-block">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile Development', 'Branding', 'Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-300 transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mr-2 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,140,0,0.07)] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent inline-block">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5 
                          group-hover:bg-orange-500/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="block text-gray-200 text-sm mb-1 font-medium">Email:</span> 
                  <a href="mailto:info@example.com" className="text-gray-300 hover:text-orange-400 transition-all duration-300">john.doe@example.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5 
                          group-hover:bg-orange-500/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="block text-gray-300 text-sm mb-1">Phone:</span> 
                  <a href="tel:+911234567890" className="text-gray-400 hover:text-orange-300 transition-all duration-300">+91 123 456 7890</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5 
                          group-hover:bg-orange-500/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="block text-gray-300 text-sm mb-1">Address:</span> 
                  <span className="text-gray-400">Mumbai, Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;