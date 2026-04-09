import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profileImg from '../assets/profile-about.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">
              <span className="text-primary text-2xl md:text-3xl mr-2">01.</span> About Me
            </h2>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 text-gray-400 space-y-6 text-lg leading-relaxed">
              <p>
                My name is Mayank Rajput, and I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Galgotias College of Engineering and Technology. I am passionate about technology and enjoy building modern web applications
              </p>
              <p>
                I have a strong interest in frontend development and love creating responsive and user-friendly interfaces using technologies like React, Tailwind CSS, and JavaScript. Along with frontend development, I am continuously improving my programming and problem-solving skills.
              </p>
              <p>
                I enjoy working on projects that help me learn new technologies and improve my development skills. Currently, I am focused on building real-world projects and expanding my knowledge in modern web development.
              </p>
            </div>

            <div className="md:col-span-2 relative group">
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden bg-primary/20 backdrop-blur-sm aspect-square flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Mayank Rajput Profile"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
