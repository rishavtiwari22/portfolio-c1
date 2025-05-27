import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { BlogPosts } from './components/BlogPosts';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import ContentEditor from './admin/ContentEditor';
import { useEffect } from 'react';

function App() {
  // Initialize dark mode based on saved preferences when the app loads
  useEffect(() => {
    try {
      // Check for saved dark mode preference
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      
      if (savedDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.style.colorScheme = 'light';
      }
    } catch (error) {
      // If localStorage is not available, use system preference as fallback
      console.warn('Could not access localStorage for dark mode preference:', error);
      
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkScheme) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark-mode'); 
        document.documentElement.style.colorScheme = 'light';
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="content" element={<ContentEditor />} />
        </Route>
        
        <Route path="/" element={
          <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
            <Navbar />
            <main className="w-full max-w-full">
              <Hero />
              <Services />
              <Experience />
              <Portfolio />
              <Testimonials />
              <BlogPosts />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;