import React from 'react';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-16 w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/80 to-orange-500/0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Brutalist accents */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-orange-500/20 rotate-45"></div>
      <div className="absolute bottom-40 right-20 w-8 h-32 bg-orange-500/10"></div>

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8 xl:px-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6 group">
              <div className="relative mr-3">
                <span className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-500 rounded-full blur-sm transform group-hover:scale-110 transition-transform duration-300"></span>
                <span className="relative bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-300 border border-white/20">TK</span>
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transform transition-all duration-300">Portfolio</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"></div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <p className="text-gray-300 leading-relaxed">
              A passionate AIMI-Certified Expert in AIML, IoT, with 4+ years of experience in Educational Innovation and Technology..
              </p>
            </div>

            {/* Social Media Icons Grid */}
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
              {/* GitHub */}
              <a
                href="https://github.com/tushantkumar2109"
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
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tushant2109/"
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
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/show/53AhFAZZKNJ9Gc3hPblDJv?si=f358b86d766849a6"
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
          w-10 h-10 rounded-xl flex items-center justify-center
          shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
          hover:shadow-[0_6px_15px_rgba(30,215,96,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
          transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
          border border-white/10 hover:border-green-400/30 hover:text-green-400"
              >
                <span className="sr-only">Spotify</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.7 365.4c-5.3 8.3-16.6 11-24.9 5.7-68.2-43.8-154-53.7-255.6-29.6-9.5 2.2-19.1-3.7-21.3-13.3-2.3-9.6 3.7-19.1 13.3-21.3 111.6-26.4 208.8-15 285.4 33.1 8.3 5.3 11 16.6 5.7 24.9zm35.5-71.6c-6.6 10.5-20.7 13.7-31.2 7.2-78-48.9-196.4-63.1-288.3-34.8-11.3 3.5-23.4-2.6-26.8-13.9-3.5-11.3 2.6-23.4 13.9-26.8 104.8-32.2 235.7-15.8 325.5 41.1 10.5 6.6 13.7 20.8 7.1 31.2zm2.2-74.3C354.6 201 231 180.4 135.2 210.2c-13.1 4.1-27-3.2-31.1-16.3-4.1-13.1 3.2-27 16.3-31.1 116.5-36.5 261.3-13.4 351.6 57.6 10.6 8.3 12.5 23.7 4.2 34.3-8.3 10.6-23.7 12.5-34.3 4.2z" />
                </svg>
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/tushant2109/profilecard/?igsh=MTRiZjFnenc4NjZ4eQ=="
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>



              {/* Facebook */}

              <a
                href="https://www.facebook.com/tushantkumar.official"
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
          w-10 h-10 rounded-xl flex items-center justify-center
          shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
          hover:shadow-[0_6px_15px_rgba(59,89,152,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
          transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
          border border-white/10 hover:border-blue-600/30 hover:text-blue-600"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>


              {/* YouTube */}
              <a
                href="https://www.youtube.com/@tushantkumar"
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
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@tushant2109"
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
          w-10 h-10 rounded-xl flex items-center justify-center
          shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
          hover:shadow-[0_6px_15px_rgba(25,25,25,0.2),inset_1px_1px_2px_rgba(255,255,255,0.2)]
          transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
          border border-white/10 hover:border-black/30 hover:text-black"
              >
                <span className="sr-only">Medium</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 1043.63 592.71">
                  <path d="M588.67 296.12c0 163.51-131.83 296.12-294.33 296.12S0 459.63 0 296.12 131.83 0 294.33 0s294.34 132.61 294.34 296.12Zm342.67 0c0 153.2-65.3 277.35-145.91 277.35s-145.9-124.15-145.9-277.35S704.42 18.76 785.04 18.76s145.9 124.15 145.9 277.36Zm112.29 0c0 141.71-29.1 256.63-65.01 256.63s-65.01-114.92-65.01-256.63S939.71 39.5 975.62 39.5s65.01 114.92 65.01 256.63Z" />
                </svg>
              </a>


              {/* Google Scholar */}

              <a
                href="https://scholar.google.com/citations?hl=en&user=Lp89A7EAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphic-light bg-white/10 text-gray-300 transition-all duration-300 
          w-10 h-10 rounded-xl flex items-center justify-center
          shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
          hover:shadow-[0_6px_15px_rgba(66,133,244,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
          transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
          border border-white/10 hover:border-blue-500/30 hover:text-blue-500"
              >
                <span className="sr-only">Google Scholar</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.64 2.58c-.38-.31-.89-.47-1.4-.46-.51 0-1.01.17-1.4.46L1.76 9.46c-.28.23-.5.52-.65.85-.15.33-.22.7-.21 1.06v1.52c0 .41.16.8.45 1.1.29.29.68.46 1.1.46H4v5.2c0 .27.11.52.29.71.18.19.44.29.7.29h3.6c.27 0 .53-.1.71-.29.19-.18.29-.44.29-.7v-5.2h4v5.2c0 .27.11.52.29.71.18.19.44.29.7.29h3.6c.27 0 .53-.1.71-.29.19-.18.29-.44.29-.7v-5.2h1.5c.41 0 .8-.16 1.1-.45.29-.3.45-.69.45-1.1v-1.52c.01-.36-.06-.73-.21-1.06-.15-.33-.37-.62-.65-.85l-7.69-6.88z" />
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
              {['Home', 'Certificate', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
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
                  <a href="mailto:info@example.com" className="text-gray-300 hover:text-orange-400 transition-all duration-300">tushant2109@gmail.com</a>
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
                  <span className="text-gray-400">Pune, Maharashtra, India</span>
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
