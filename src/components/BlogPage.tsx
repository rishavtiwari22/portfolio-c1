import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CalendarIcon, UserIcon, ArrowRightIcon, ArrowLeftIcon } from './Icons';
import { useBlogContext } from '../context/BlogContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { allPosts, categories } = useBlogContext();
  
  // Detect if we're on the main blog page (/blog) and not in any specific blog post
  const isMainBlogPage = location.pathname === '/blog';
  // Detect simple mode from URL parameters
  const isSimpleMode = new URLSearchParams(location.search).get('mode') === 'simple' || isMainBlogPage;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isInitialMount, setIsInitialMount] = useState(true);
  
  // Filter posts based on selected category and search term
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Initial setup - immediately show content on first load
  useEffect(() => {
    if (isInitialMount) {
      setIsLoading(false);
      setIsInitialMount(false);
    }
  }, [isInitialMount]);

  // Handle filtering with smooth transitions
  useEffect(() => {
    if (!isInitialMount) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory, searchTerm, isInitialMount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/5 to-orange-50/10 relative overflow-hidden">
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '0s', animationDuration: '15s'}}></div>
      <div className="absolute -bottom-20 left-40 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '3s', animationDuration: '18s'}}></div>
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl animate-blob" style={{animationDelay: '6s', animationDuration: '20s'}}></div>
      
      {!isSimpleMode && <Navbar />}
      
      {!isSimpleMode ? (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore thoughts, tutorials, and insights on technology, development, and innovation.
            </p>
          </div>
        </section>
      ) : (
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mr-4"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back
              </button>
              <h1 className="text-3xl font-bold text-gray-800">All Blog Posts</h1>
            </div>
          </div>
        </section>
      )}

      {!isSimpleMode && (
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 transform scale-105'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          <div className={`transition-all duration-500 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 flex flex-col"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isLoading ? 'none' : 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute top-4 left-4 backdrop-blur-md bg-white/30 border border-white/30 text-white px-4 py-1.5 rounded-full shadow-lg">
                      <span className="text-xs font-semibold tracking-wide">{post.category}</span>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 backdrop-blur-md bg-white/40 text-gray-800 text-xs px-3 py-1 rounded-full border border-white/30">
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <CalendarIcon className="w-4 h-4 mr-1.5 text-blue-500" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-white/60 text-gray-600 px-2.5 py-1 rounded-full border border-white/50">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">No posts found in this category.</p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  View All Posts
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {!isSimpleMode && <Footer />}
    </div>
  );
};
