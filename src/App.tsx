import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Portfolio } from './components/PortfolioOptimized';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { BlogPosts } from './components/BlogPosts';
import { BlogDetail } from './components/BlogDetail';
import { BlogPage } from './components/BlogPage';
import { ProjectsPage } from './components/ProjectsPage';
import { Footer } from './components/Footer';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <Router>
      <BlogProvider>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
              <Navbar />
              <main className="w-full max-w-full">
                <Hero />
                {/* <Services /> */}
                <Experience />
                <Portfolio />
                {/* <Testimonials /> */}
                <BlogPosts />
                <Contact />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BlogProvider>
    </Router>
  );
}

export default App;