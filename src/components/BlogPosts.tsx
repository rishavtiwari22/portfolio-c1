import React, { useEffect, useRef } from 'react';
import { CalendarIcon, UserIcon, ArrowRightIcon } from './Icons';

export const BlogPosts: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Enhanced blog posts with more engaging design and information
  const posts = [
    {
      id: 1,
      title: "Design Unleashed: Behind the Scenes of UI/UX Process",
      excerpt: "An insider look at how I approach UI/UX projects from research to final delivery.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "15 June 2023",
      author: "John Doe",
      category: "UI Design",
      readingTime: "5 min read",
      tags: ["Design", "UI/UX", "Research"]
    },
    {
      id: 2,
      title: "Sugee: Loan Management Dashboard Success Story",
      excerpt: "How I designed and developed a loan management system that increased efficiency by 45%.",
      image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "23 Aug 2023",
      author: "John Doe",
      category: "Case Study",
      readingTime: "8 min read",
      tags: ["Dashboard", "Finance", "UX Design"]
    },
    {
      id: 3,
      title: "ChatMatic: Innovative way to Direct Message in Digital Media",
      excerpt: "The story behind creating a messaging app that stands out in a crowded market.",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "10 Sep 2023",
      author: "John Doe",
      category: "App Design",
      readingTime: "6 min read",
      tags: ["Mobile", "Messaging", "UI Design"]
    }
  ];
  
  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-right');
            (entry.target as HTMLElement).style.opacity = '1';
          }, 100 * index);
        }
      });
    }, { threshold: 0.1 });
    
    const articleElements = document.querySelectorAll('.blog-card');
    articleElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/5 to-orange-50/10 relative overflow-hidden w-full full-width-section">
      {/* Enhanced dynamic background elements with more vibrant animations */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '0s', animationDuration: '15s'}}></div>
      <div className="absolute -bottom-20 left-40 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '3s', animationDuration: '18s'}}></div>
      <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '6s', animationDuration: '20s'}}></div>
      
      {/* Enhanced brutalist geometric elements with better contrast and positioning */}
      <div className="absolute top-32 left-32 w-20 h-6 bg-blue-400/30 transform rotate-12 shadow-md"></div>
      <div className="absolute bottom-20 right-40 w-16 h-16 border-4 border-orange-400/30 transform -rotate-6 shadow-lg"></div>
      <div className="absolute top-60 right-80 w-10 h-24 bg-purple-400/20 transform rotate-45 shadow-md"></div>
      
      <div className="container-fluid relative z-10">
        <div className="w-full px-5 md:px-10 xl:px-16">
          <div className="flex flex-col items-center text-center mb-16 mx-auto max-w-4xl">
            <div className="inline-block backdrop-blur-sm bg-white/30 border border-white/50 rounded-full px-4 py-1 mb-4 animate-float" style={{animationDelay: '0.3s'}}>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text font-medium animate-gradient-text bg-size-200">Insights & Stories</span>
            </div>
            
            {/* Kinetic typography heading - centered at top */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300">From</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.1s'}}>my</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.2s'}}>blog</span>{' '}
              <span className="inline-block hover:transform hover:translate-y-[-5px] transition-transform duration-300" style={{transitionDelay: '0.3s'}}>posts</span>
            </h2>
            
            <p className="text-gray-600 mx-auto max-w-2xl backdrop-blur-md bg-white/40 p-5 rounded-2xl border border-white/30 shadow-neumorphic-light transform hover:shadow-xl hover:scale-[1.02] transition-all duration-500 mb-8">
              I regularly write about design, development, and my experiences working on various projects.
            </p>
            
            {/* Improved button with better hover effects */}
            <a 
              href="#" 
              className="flex items-center backdrop-blur-sm bg-white/50 text-orange-600 border border-orange-300/30 
                       hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white 
                       px-8 py-3 rounded-xl transition-all font-medium shadow-md 
                       hover:shadow-orange-300/30 hover:shadow-lg group transform hover:-translate-y-1"
            >
              <span className="mr-2">View All Posts</span>
              <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={post.id} 
                className="blog-card glassmorphic bg-white/70 border-0 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(8,_112,_184,_0.1)] 
                          hover:shadow-[0_15px_60px_rgba(8,_112,_184,_0.2)] transition-all duration-500 
                          hover:-translate-y-2 group flex flex-col h-full transform perspective-1000"
                style={{ 
                  opacity: 0,
                  backdropFilter: 'blur(16px)', 
                  WebkitBackdropFilter: 'blur(16px)',
                  transformStyle: 'preserve-3d',
                  transform: `perspective(1000px) rotateY(${index % 2 ? '0.8' : '-0.8'}deg) translateZ(5px)`,
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: index % 2 ? 
                    'inset 3px 3px 10px rgba(255,255,255,0.2), inset -3px -3px 10px rgba(0,0,0,0.05)' : 
                    'inset -3px 3px 10px rgba(255,255,255,0.2), inset 3px -3px 10px rgba(0,0,0,0.05)'
                }}
              >
                <div className="relative h-56 overflow-hidden group/image">
                  {/* Enhanced gradient overlay with more vibrant colors and animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-purple-300/30 to-orange-300/30 z-0 
                                opacity-60 group-hover:opacity-90 transition-all duration-500 transform 
                                group-hover:scale-110"></div>
                  
                  {/* Enhanced abstract decorative elements with animation */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-400/30 rounded-full blur-xl 
                                animate-pulse" style={{animationDuration: '8s'}}></div>
                  <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white/40 rounded-full transform -rotate-12 z-10
                                group-hover:-rotate-45 transition-transform duration-700"></div>
                  
                  {/* Brutalist accent element - depends on category */}
                  {post.category === "UI Design" && (
                    <div className="absolute top-0 left-0 w-20 h-5 bg-blue-500/70 z-10"></div>
                  )}
                  {post.category === "Case Study" && (
                    <div className="absolute top-0 right-0 w-5 h-20 bg-orange-500/70 z-10"></div>
                  )}
                  {post.category === "App Design" && (
                    <div className="absolute top-12 right-12 w-10 h-10 bg-purple-500/70 transform rotate-45 z-10"></div>
                  )}
                  
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 
                             group-hover:rotate-1 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Glassmorphic badge with enhanced design */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/30 border border-white/30 
                                text-white px-4 py-1.5 rounded-full z-10 shadow-lg transform 
                                group-hover:translate-y-1 transition-transform">
                    <span className="text-xs font-semibold tracking-wide">{post.category}</span>
                  </div>
                  
                  {/* Reading time badge - neumorphic style */}
                  <div className="absolute bottom-4 right-4 backdrop-blur-md bg-white/40 text-gray-800 
                                text-xs px-3 py-1 rounded-full z-10 border border-white/30 shadow-neumorphic-light
                                transform group-hover:scale-110 transition-transform">
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                
                <div className="p-7 bg-white/90 flex-1 flex flex-col relative z-10 border-t border-white/20">
                  {/* Stylish date display with calendar icon */}
                  <div className="flex items-center text-sm text-gray-600 mb-3 backdrop-blur-sm bg-white/50 
                                border border-white/30 px-4 py-2 rounded-xl w-fit shadow-inner-neumorphic">
                    <CalendarIcon className="w-4 h-4 mr-1.5 text-blue-500" />
                    <span>{post.date}</span>
                  </div>
                  
                  {/* Title with enhanced clarity and smooth gradient transition */}
                  <h3 className="text-xl font-bold mb-3 relative z-10">
                    <a href="#" className="text-gray-800 hover:text-transparent hover:bg-gradient-to-r 
                                      hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text 
                                      transition-colors duration-300 line-clamp-2 block">
                      {post.title}
                    </a>
                  </h3>
                  
                  {/* Excerpt with clean typography */}
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  
                  {/* Tag cloud */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-white/60 text-gray-600 px-2.5 py-1 rounded-full 
                                            border border-white/50 transform transition-all duration-300 
                                            hover:bg-blue-50 hover:border-blue-200/50 hover:text-blue-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    {/* Author info with hover effect */}
                    <div className="flex items-center group/author">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400/80 to-purple-500/80 
                                    flex items-center justify-center overflow-hidden mr-2 border border-white/30
                                    shadow-md group-hover/author:shadow-lg transition-all">
                        <UserIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover/author:text-blue-600 transition-colors">{post.author}</span>
                    </div>
                    
                    {/* Read more button with improved animated hover effect */}
                    <a 
                      href="#" 
                      className="backdrop-blur-sm bg-white/60 border border-orange-300/30 text-orange-600 px-5 py-2 
                              rounded-xl transition-all font-medium flex items-center relative overflow-hidden group/btn
                              hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white 
                              shadow-md hover:shadow-orange-300/30 hover:shadow-lg hover:-translate-y-1
                              transform duration-300"
                    >
                      <span className="relative z-10">Read More</span>
                      <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-all transform group-hover/btn:translate-x-1.5" />
                      {/* Button hover animation */}
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 
                                     group-hover/btn:opacity-100 -z-0 transition-opacity duration-300"></span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            {/* Mobile view button with improved styling */}
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-3 rounded-xl relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-orange-600 
                            opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 
                            blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105"></span>
              <span className="relative z-10 text-white font-medium flex items-center">
                <span className="mr-2">View All Posts</span>
                <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};