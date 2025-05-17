import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
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
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transform transition-all duration-300">Portfolio</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <p className="text-gray-300 leading-relaxed">
                A passionate developer creating beautiful, functional, and user-centered digital experiences.
              </p>
            </div>
            
            <div className="flex space-x-3">
              {['twitter', 'linkedin', 'github', 'dribbble'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="glassmorphic-light bg-white/10 text-gray-300 hover:text-white transition-all duration-300 
                          w-10 h-10 rounded-full flex items-center justify-center
                          shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_1px_1px_1px_rgba(255,255,255,0.15)]
                          hover:shadow-[0_6px_15px_rgba(255,140,0,0.15),inset_1px_1px_2px_rgba(255,255,255,0.2)]
                          transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm
                          border border-white/10 hover:border-orange-500/30"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,140,0,0.07)] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent inline-block">Pages</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Experience', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-orange-300 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mr-2 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,140,0,0.07)] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent inline-block">Services</h3>
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
                  <span className="block text-gray-300 text-sm mb-1">Email:</span> 
                  <a href="mailto:info@example.com" className="text-gray-400 hover:text-orange-300 transition-all duration-300">john.doe@example.com</a>
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
        
        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="glassmorphic-light bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <p className="text-gray-300 text-sm flex items-center">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 text-xs px-2 py-0.5 rounded-md mr-2 font-medium">2025</span>
              <span className="opacity-80">© John Doe. All rights reserved.</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-300 text-sm transition-all duration-300 px-3 py-1.5 
                               rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/5">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-300 text-sm transition-all duration-300 px-3 py-1.5 
                               rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/5">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};