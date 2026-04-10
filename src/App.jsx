import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import HireMeModal from './components/HireMeModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const openHireMeModal = () => setIsHireMeModalOpen(true);
  const closeHireMeModal = () => setIsHireMeModalOpen(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh] bg-gray-900 text-primary">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-[100dvh] text-gray-100 font-sans selection:bg-primary selection:text-white pb-[env(safe-area-inset-bottom)]">
      <CustomCursor />
      <Navbar onHireMeClick={openHireMeModal} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact onHireMeClick={openHireMeModal} />
      </main>
      <HireMeModal isOpen={isHireMeModalOpen} onClose={closeHireMeModal} />
    </div>
  );
}

export default App;
