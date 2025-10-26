import React, { useState, useEffect } from 'react';
import { MailIcon, PhoneIcon, LocationIcon, SendIcon } from './Icons';
import emailjs from "emailjs-com";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contact, setContact] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading

  useEffect(() => {
    fetch('/data/content.json')
      .then(res => res.json())
      .then(data => setContact(data.contact))
      .catch(error => console.error('Error fetching contact data:', error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button and show loading

    // Debug: Check if environment variables are loaded
    console.log('Environment variables:', {
      serviceKey: import.meta.env.VITE_SERVICE_KEY,
      templateKey: import.meta.env.VITE_TEMPLATE_KEY,
      publicKey: import.meta.env.VITE_PUBLIC_KEY
    });

    // Check if all required environment variables are present
    if (!import.meta.env.VITE_SERVICE_KEY || !import.meta.env.VITE_TEMPLATE_KEY || !import.meta.env.VITE_PUBLIC_KEY) {
      console.error('Missing EmailJS environment variables');
      alert('Email service is not properly configured. Please contact the administrator.');
      setIsSubmitting(false);
      return;
    }

    emailjs.send(import.meta.env.VITE_SERVICE_KEY,import.meta.env.VITE_TEMPLATE_KEY,   
      formData,             
      import.meta.env.VITE_PUBLIC_KEY     
    )
    .then(() => {
      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Oops! Something went wrong. Please try again later.");
    })
    .finally(() => {
        setIsSubmitting(false); // Re-enable button
    });
  };

  if (!contact) return null;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-orange-50/15 to-orange-100/20 relative overflow-hidden w-full max-w-full">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-blob" style={{ animationDuration: '15s' }}></div>
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-purple-300/20 rounded-full blur-3xl animate-blob" style={{ animationDuration: '18s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-blob" style={{ animationDuration: '20s' }}></div>

      {/* Brutalist accents */}
      <div className="absolute top-20 left-20 w-32 h-8 bg-orange-400/30 transform rotate-45 backdrop-blur-sm"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 border-4 border-blue-400/30 transform -rotate-12 backdrop-blur-sm"></div>
      <div className="absolute top-60 right-40 w-16 h-16 bg-pink-400/20 transform rotate-12 backdrop-blur-sm"></div>

      <div className="container-fluid relative z-10">
        <div className="w-full px-4 md:px-8 xl:px-12">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="inline-block perspective-1000 group mb-6 relative">
              <div className="transform group-hover:rotate-y-15 transition-all duration-700">
                <div className="inline-block backdrop-blur-md bg-white/40 border border-white/50 rounded-full px-6 py-2.5 shadow-lg overflow-hidden relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-red-400/10 to-purple-500/20 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="animate-gradient-text bg-size-200 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-transparent bg-clip-text font-semibold tracking-wider text-sm uppercase relative z-10">
                    Get In Touch
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight relative">
              <span className="inline-block animate-gradient-text bg-size-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent drop-shadow-sm perspective-1000 transform transition-all duration-500 hover:scale-[1.03]">
                Have an Awesome Project Idea?<br />Let's Discuss
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1.5 w-40 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 w-48 bg-gradient-to-r from-orange-400/40 to-red-400/40 rounded-full blur-md"></div>
            </h2>

            <div className="relative group max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg backdrop-blur-md bg-white/50 p-7 rounded-2xl border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-10 relative transition-all group-hover:shadow-xl leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 via-purple-300/10 to-blue-300/20 rounded-2xl blur-md -z-10 transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 rounded-2xl shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] opacity-50 z-20 pointer-events-none"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-xl glassmorphic bg-white/40 border border-white/30 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-hidden" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact Info */}
                <div className="bg-gradient-to-br from-orange-500/90 to-orange-600/90 backdrop-blur-md text-white p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="mb-8 backdrop-blur-sm bg-white/10 p-3 rounded-lg border border-white/10 inline-block">Fill up the form and I'll get back to you within 24 hours.</p>
                    <div className="space-y-6">
                      <div className="flex items-start group">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-3 mr-4 shadow-lg group-hover:bg-white/30 transition-colors">
                          <PhoneIcon className="w-5 h-5" />
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 border border-white/10 p-3 rounded-lg flex-1">
                          <p className="font-medium">Phone</p>
                          <p>{contact.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-3 mr-4 shadow-lg group-hover:bg-white/30 transition-colors">
                          <MailIcon className="w-5 h-5" />
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 border border-white/10 p-3 rounded-lg flex-1">
                          <p className="font-medium">Email</p>
                          <p>{contact.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-3 mr-4 shadow-lg group-hover:bg-white/30 transition-colors">
                          <LocationIcon className="w-5 h-5" />
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 border border-white/10 p-3 rounded-lg flex-1">
                          <p className="font-medium">Location</p>
                          <p>{'Prayagraj, Utter Pradesh, India'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Calendar Booking */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <a
                        href="https://calendly.com/rishav-navgurukul/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-300 rounded-xl p-4 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-white group-hover:text-white/90 transition-colors">Schedule a Call</p>
                            <p className="text-sm text-white/80 group-hover:text-white/70 transition-colors">Book a free consultation</p>
                          </div>
                          <svg className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 md:p-12 backdrop-blur-xl bg-white/70 relative shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(0,0,0,0.05)]">
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-orange-200/30 to-red-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                  <div className="absolute -top-5 -left-5 w-40 h-40 bg-gradient-to-tl from-blue-200/20 to-purple-200/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '12s' }}></div>
                  <div className="absolute bottom-8 right-8 w-12 h-3 bg-orange-400/20 transform rotate-45"></div>

                  <form onSubmit={handleSubmit} className="relative z-10">
                    {/* Name */}
                    <div className="mb-8">
                      <label htmlFor="name" className="inline-block text-sm font-medium text-gray-700 mb-2 bg-gradient-to-r from-white/50 to-white/30 px-4 py-2 rounded-lg border border-white/30 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Rishav Tiwari" required
                        className="w-full px-5 py-4 neumorphic-inset bg-white/60 border border-white/40 rounded-xl focus:ring-2 focus:ring-orange-500/60 outline-none placeholder:text-gray-400 text-gray-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.3)]"/>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                      <label htmlFor="email" className="inline-block text-sm font-medium text-gray-700 mb-2 bg-gradient-to-r from-white/50 to-white/30 px-4 py-2 rounded-lg border border-white/30 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                        Your Email
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="tiwaririshav463@gmail.com" required
                        className="w-full px-5 py-4 neumorphic-inset bg-white/60 border border-white/40 rounded-xl focus:ring-2 focus:ring-orange-500/60 outline-none placeholder:text-gray-400 text-gray-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.3)]"/>
                    </div>

                    {/* Subject */}
                    <div className="mb-6">
                      <label htmlFor="subject" className="inline-block text-sm font-medium text-gray-700 mb-2 bg-gradient-to-r from-white/50 to-white/30 px-4 py-2 rounded-lg border border-white/30 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                        Subject
                      </label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required
                        className="w-full px-5 py-4 neumorphic-inset bg-white/60 border border-white/40 rounded-xl focus:ring-2 focus:ring-orange-500/60 outline-none placeholder:text-gray-400 text-gray-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.3)]"/>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="inline-block text-sm font-medium text-gray-700 mb-2 bg-gradient-to-r from-white/50 to-white/30 px-4 py-2 rounded-lg border border-white/30 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                        Message
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Your message here..." required
                        className="w-full px-5 py-4 neumorphic-inset bg-white/60 border border-white/40 rounded-xl focus:ring-2 focus:ring-orange-500/60 outline-none placeholder:text-gray-400 text-gray-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.3)] resize-none"/>
                    </div>

                    {/* Send Button */}
                    <button 
                        type="submit" 
                        disabled={isSubmitting} // Disable button while submitting
                        className="w-full backdrop-blur-lg bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 border-2 border-orange-400 shadow-[0_15px_25px_-10px_rgba(240,140,50,0.7)] hover:shadow-[0_25px_35px_-15px_rgba(240,140,50,0.8)] hover:-translate-y-2 flex items-center justify-center group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none">
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-orange-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <div className="absolute -right-20 group-hover:right-0 top-0 w-20 h-full bg-white/30 skew-x-12 transition-all duration-700"></div>
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <SendIcon className={`w-5 h-5 ml-2 relative z-10 ${isSubmitting ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform duration-300'}`} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};