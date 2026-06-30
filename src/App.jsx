import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DevOpsProjects from './components/DevOpsProjects';
import Certifications from './components/Certifications';
import About from './components/About';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0e14] text-gray-200 font-mono min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <DevOpsProjects />
      <Certifications />
      <About />
      <CVSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;