import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from './Icons';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/src/data/content.json')
      .then(res => res.json())
      .then(data => setTestimonials(data.testimonials || []));
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden w-full full-width-section">
      {/* Simpler background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-fluid relative z-10">
        <div className="w-full px-5 md:px-10 xl:px-16">
          <div className="mb-16 text-center">
            <div className="inline-block backdrop-blur-sm bg-white/10 border border-white/10 rounded-full px-4 py-1 mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-medium">Client Feedback</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Testimonials That Speak to My Results</h2>
            <p className="text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/10">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-6 -left-6 text-purple-500 opacity-30 z-20">
                <QuoteIcon className="w-16 h-16" />
              </div>

              {/* Testimonial card */}
              <div 
                className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg relative z-10"
              >
                {/* Simple decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                
                <div className="flex flex-col gap-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-5">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-purple-200 text-sm">{testimonials[currentIndex].position}</p>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="text-gray-100 italic text-lg">"{testimonials[currentIndex].text}"</p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="bg-white/15 hover:bg-white/25 text-white rounded-full p-3 transition-all"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-white' 
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="bg-white/15 hover:bg-white/25 text-white rounded-full p-3 transition-all"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};