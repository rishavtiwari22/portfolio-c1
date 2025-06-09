import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from './Icons';
import { useBlogContext, BlogPost } from '../context/BlogContext';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPostById, allPosts } = useBlogContext();
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    if (id) {
      const postId = parseInt(id);
      const currentPost = getPostById(postId);
      setPost(currentPost || null);
    }
  }, [id, getPostById]);

  // Get related posts to show at the bottom
  const relatedPosts = post 
    ? allPosts
        .filter(relatedPost => 
          relatedPost.id !== post.id && 
          (relatedPost.category === post.category || 
           relatedPost.tags.some(tag => post.tags.includes(tag)))
        )
        .slice(0, 2)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="container mx-auto px-5 md:px-10 xl:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Post Not Found</h1>
            <p className="text-gray-700 mb-8">The blog post you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/5 to-orange-50/10 min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s', animationDuration: '15s'}}></div>
      <div className="absolute -bottom-20 left-40 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s', animationDuration: '18s'}}></div>
      <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s', animationDuration: '20s'}}></div>

      {/* Navigation Bar */}
      <nav className="bg-white/90 border-white/40 backdrop-blur-xl border-b sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-5 md:px-10 xl:px-16 py-5">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 group"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-9 h-9 rounded-xl 
                           flex items-center justify-center shadow-md group-hover:shadow-blue-400/20 
                           group-hover:shadow-lg transition-all">
                <ArrowLeftIcon className="w-5 h-5" />
              </div>
              <span className="text-gray-800 group-hover:text-blue-600 font-medium transition-colors">Home</span>
            </button>
            
            <Link 
              to="/blog" 
              className="flex items-center space-x-2 group"
            >
              <span className="text-gray-800 group-hover:text-orange-600 font-medium transition-colors">All Posts</span>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-9 h-9 rounded-xl 
                           flex items-center justify-center shadow-md group-hover:shadow-orange-400/20 
                           group-hover:shadow-lg transition-all">
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-5 md:px-10 xl:px-16 pt-12 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <div className="mb-12 bg-white/70 border-white/50 backdrop-blur-lg rounded-2xl p-8 border shadow-lg transition-all hover:shadow-xl">
            {/* Category Badge */}
            <div className="mb-6 inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200 
                          rounded-full px-5 py-2 border shadow-sm">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-semibold text-sm">
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text 
                         bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-5 md:gap-8 mb-8">
              <div className="flex items-center bg-white/80 border-white/50 text-gray-600 px-4 py-2 rounded-xl shadow-sm border">
                <CalendarIcon className="w-5 h-5 mr-2.5 text-blue-500" />
                <span className="font-medium">{post.date}</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-100 text-blue-700 
                            px-4 py-2 rounded-xl text-sm border font-medium shadow-sm">
                {post.readingTime}
              </div>
            </div>
            
            {/* Excerpt */}
            <p className="text-lg text-gray-600 border-blue-500 bg-blue-50/50 border-l-4 pl-6 py-4 pr-6 rounded-r-lg italic leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          
          {/* Featured Image */}
          <div className="relative mb-16 group">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] transform transition-all duration-500 
                          hover:scale-[1.01] border border-white/70">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-500/30 to-orange-500/30 z-10 
                           opacity-60 transition-all duration-500 group-hover:opacity-75 mix-blend-overlay"></div>
              
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                loading="eager"
              />
              
              <div className="absolute top-5 right-5 w-24 h-24 border-2 border-white/40 rounded-full z-20 
                           opacity-70 transform rotate-45 group-hover:rotate-90 transition-all duration-1000"></div>
              <div className="absolute bottom-5 left-5 w-16 h-16 border-2 border-white/40 z-20 
                           opacity-70 transform -rotate-12 group-hover:rotate-12 transition-all duration-1000"></div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:hidden">
                <h2 className="text-white text-2xl font-bold line-clamp-2">{post.title}</h2>
              </div>
            </div>
          </div>
          
          {/* Blog Content - Improved Layout */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/60 shadow-xl mb-12">
            <div 
              className="prose prose-lg max-w-none
                       prose-headings:text-gray-800 prose-headings:font-bold prose-headings:leading-tight
                       prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-0
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200
                       prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:text-blue-800
                       prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-gray-700
                       prose-p:text-gray-700 prose-p:leading-8 prose-p:mb-6 prose-p:text-lg
                       prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline prose-a:border-b-2 prose-a:border-blue-200 
                       hover:prose-a:border-blue-600 hover:prose-a:text-blue-800 prose-a:transition-colors
                       prose-strong:text-gray-800 prose-strong:font-semibold prose-strong:bg-yellow-50 prose-strong:px-1 prose-strong:rounded-sm
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gradient-to-r 
                       prose-blockquote:from-blue-50 prose-blockquote:to-white prose-blockquote:py-6 prose-blockquote:px-6 
                       prose-blockquote:rounded-r-lg prose-blockquote:my-8 prose-blockquote:shadow-sm prose-blockquote:text-lg
                       prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-2 prose-code:py-1 prose-code:rounded-md 
                       prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:font-medium prose-code:text-sm
                       prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:shadow-lg 
                       prose-pre:border prose-pre:border-gray-700 prose-pre:my-8
                       prose-img:rounded-xl prose-img:shadow-lg prose-img:my-10 prose-img:border prose-img:border-gray-100
                       prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-7
                       prose-ol:my-6 prose-ol:pl-0
                       prose-ul:my-6 prose-ul:pl-0
                       prose-ol>li:pl-2 prose-ul>li:pl-2
                       prose-table:my-10 prose-table:w-full prose-table:border-collapse prose-table:rounded-lg 
                       prose-table:overflow-hidden prose-table:shadow-lg prose-table:border prose-table:border-gray-200
                       prose-th:bg-blue-50 prose-th:p-4 prose-th:text-left prose-th:font-semibold prose-th:text-gray-800 
                       prose-th:border-b-2 prose-th:border-blue-100
                       prose-td:border-t prose-td:border-gray-200 prose-td:p-4 prose-td:text-gray-700 prose-td:bg-white
                       first-line:text-xl first-line:font-medium first-letter:text-4xl first-letter:font-bold 
                       first-letter:text-blue-800 first-letter:mr-2 first-letter:float-left first-letter:leading-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Key Takeaways Section */}
            <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-100 shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-orange-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Key Takeaways
              </h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg leading-7">Focus on user-centered design principles for better engagement</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg leading-7">Research is the foundation of any successful design process</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg leading-7">Continuous testing and iteration leads to optimal results</span>
                </li>
              </ul>
            </div>
          </div>
              
          {/* Back to All Posts Button */}
          <div className="flex justify-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 
                       text-white font-medium px-8 py-4 rounded-xl shadow-lg 
                       hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              <span>Back to All Posts</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};