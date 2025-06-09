import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ArrowLeftIcon, ArrowRightIcon } from './Icons';
import { useBlogContext, BlogPost } from '../context/BlogContext';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPostById, getRelatedPosts } = useBlogContext();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    if (id) {
      const postId = parseInt(id);
      const currentPost = getPostById(postId);
      setPost(currentPost || null);
      
      // Get related posts using context helper (limit to 2)
      const related = getRelatedPosts(postId, 2);
      setRelatedPosts(related);
    }
  }, [id, getPostById, getRelatedPosts]);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="container mx-auto px-5 md:px-10 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
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
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '0s', animationDuration: '15s'}}></div>
      <div className="absolute -bottom-20 left-40 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '3s', animationDuration: '18s'}}></div>
      <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl animate-blob" style={{animationDelay: '6s', animationDuration: '20s'}}></div>

      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-white/40 sticky top-0 z-50 shadow-lg">
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
              <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">Home</span>
            </button>
            
            <Link 
              to="/blog" 
              className="flex items-center space-x-2 group"
            >
              <span className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors">All Posts</span>
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
          <div className="mb-10">
            {/* Category Badge */}
            <div className="mb-4 inline-block backdrop-blur-sm bg-white/30 border border-white/50 rounded-full px-4 py-1 animate-float">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text font-medium">
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">{post.title}</h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <UserIcon className="w-5 h-5 mr-2 text-blue-500" />
                <span>{post.author}</span>
              </div>
              <div className="px-3 py-1 bg-white/60 rounded-full text-sm border border-gray-100">
                {post.readingTime}
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative mb-10 rounded-2xl overflow-hidden shadow-lg h-96 md:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-orange-300/20 z-10 
                           opacity-60 transition-all duration-500"></div>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Blog Content */}
          <div className="prose prose-lg max-w-none bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 
                         border border-white/30 shadow-neumorphic-light mb-10">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white/70 text-gray-700 rounded-full text-sm border border-white/50 
                           hover:bg-blue-50 hover:border-blue-200/50 hover:text-blue-600 transition-all cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`} 
                    className="group"
                  >
                    <article className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl 
                                       overflow-hidden transition-all duration-300 shadow-md 
                                       hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-orange-300/20 z-10 
                                       opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-all duration-700 
                                   group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 backdrop-blur-md bg-white/30 border border-white/30 
                                       text-white px-3 py-1 rounded-full z-20">
                          <span className="text-xs font-semibold">{relatedPost.category}</span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-1">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon className="w-4 h-4 mr-1.5 text-blue-500" />
                            <span>{relatedPost.date}</span>
                          </div>
                          <span className="text-sm text-orange-500 font-medium group-hover:text-orange-600">Read More</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Back to all posts button */}
          <div className="flex justify-center mt-16">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 
                       text-white font-medium px-8 py-3 rounded-xl shadow-lg 
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
