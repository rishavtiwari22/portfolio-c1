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

function App() {

  return (
    <Router>
      <Routes>
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