import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Mail, Download } from 'lucide-react';

const Hero = () => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#f97316",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 px-4">

      {init && (
        <div className="absolute inset-0 z-0">
          <Particles id="tsparticles" options={particlesConfig} />
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.p
          className="text-primary font-medium tracking-wider mb-4 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Mayank <span className="text-gray-400">Rajput.</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
            I build things for the web.
          </span>
        </motion.h1>


        <motion.p
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm an aspiring software engineer specializing in building modern web experiences with the MERN stack. I'm passionate about creating clean, efficient, and user-friendly digital products.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="https://github.com/rajpootmayank2002-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-primary hover:bg-gray-700 transition-all"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mayankrajput06"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-primary hover:bg-gray-700 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-primary hover:bg-gray-700 transition-all"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/__mynkk_6"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-primary hover:bg-gray-700 transition-all"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-orange-600 transition-all text-center shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            Check out my work
          </a>
          <a
            href="/NewUpdateResume.pdf"
            download
            className="w-full sm:w-auto px-8 py-4 border border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all inline-flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-[30px] h-[50px] rounded-3xl border-2 border-gray-500 flex justify-center p-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
