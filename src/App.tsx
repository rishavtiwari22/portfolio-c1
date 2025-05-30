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
import { BlogPage } from './pages/BlogPage';

// Create a layout component that wraps the content with improved spacing
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col relative">
    <Navbar />
    <div className="flex-1 pt-[70px] w-full">
      {children}
    </div>
    <Footer />
  </div>
);

// Create a home page component
const HomePage: React.FC = () => (
  <main className="w-full max-w-[100vw] overflow-x-hidden">
    <Hero />
    <Services />
    <Experience />
    <Portfolio />
    <Testimonials />
    <BlogPosts />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;