import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiFirebase, SiFramer, SiOpenai
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'MachineLearning', icon: <SiOpenai className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">
              <span className="text-primary text-2xl md:text-3xl mr-2">02.</span> Skills & Tools
            </h2>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-gray-800 transition-all group"
              >
                <div className="text-4xl group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {skill.icon}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-200 font-medium">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
