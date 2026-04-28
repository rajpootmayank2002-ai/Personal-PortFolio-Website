import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import portfolioImg from '../assets/portfolio-screenshot.png';
import heartDiseaseImg from '../assets/heart-disease-prediction.png';


const projects = [
  {
    title: 'AI-Powered-ResumeBuilder',
    description: 'A user-friendly platform that allows users to create professional resumes by filling out a structured form. It features instant PDF generation, allowing users to download their resumes in seconds. Built with a focus on simplicity and efficiency.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'FireBase'],
    github: 'https://github.com/rajpootmayank2002-ai/AI-Powered-ResumeBuilder',
    live: 'https://ai-resumebuilder-mayank.vercel.app',
  },
  {
    title: 'Personal PortFolio website',
    description: 'A modern and responsive personal portfolio website developed to present my projects, technical skills, and achievements. The website includes sections for projects, certificates, and a downloadable resume so that recruiters and visitors can easily explore my work and learn more about my development experience.',
    image: portfolioImg,
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'web3forms', 'Lucide React & React Icons'],
    github: 'https://github.com/rajpootmayank2002-ai/Personal-PortFolio-Website',
    live: 'https://maynkk-port-folio-website.vercel.app/',
  },

  {
    title: 'Heart-Disease-prediction-Model',
    description: 'A machine learning model developed using Python and data science libraries to predict the likelihood of heart disease based on medical attributes. This project involved extensive data analysis, feature engineering, and model training.',
    image: heartDiseaseImg,
    tech: ['Python', 'Machine Learning', 'Data Science', 'Jupyter Notebook'],
    github: 'https://github.com/rajpootmayank2002-ai/Heart-Disease-prediction-Model',
    live: 'https://heart-disease-prediction-model-mayankcreation.streamlit.app/',
  },
  {
    title: 'To-Do App',
    description: 'To-Do App is a simple task management web application that helps users organize their daily tasks efficiently. Users can add, edit, delete, and mark tasks as completed. The application provides a clean and responsive interface, making it easy to manage tasks on both desktop and mobile devices.',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'TailwindCss', 'JavaScript'],
    github: 'https://github.com/rajpootmayank2002-ai/To-Do-app',
    live: 'https://to-do-app-ruddy-pi.vercel.app/',
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">
              <span className="text-primary text-2xl md:text-3xl mr-2">05.</span> My Work
            </h2>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>

          <div ref={ref} className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 items-center gap-8 ${index % 2 === 0 ? '' : 'md:text-right text-left'
                  }`}
              >
                {/* Image */}
                <div className={`md:col-span-7 relative group ${index % 2 === 0 ? 'md:order-1' : 'md:col-start-6 md:order-2'}`}>
                  <a href={project.github} className="relative block h-full w-full rounded-xl overflow-hidden cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto md:h-[350px] object-cover transition-all duration-500"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className={`md:col-span-6 relative z-20 ${index % 2 === 0 ? 'md:col-start-7 md:order-2 text-right' : 'md:col-start-1 md:order-1 text-left'}`}>
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-primary transition-colors">
                    <a href={project.github}>{project.title}</a>
                  </h3>

                  <div className={`bg-gray-800/95 backdrop-blur-xl p-8 border border-gray-700/50 rounded-2xl mb-8 shadow-2xl relative hover:border-primary/30 transition-all duration-300 text-left`}>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-wide">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 font-mono text-xs md:text-sm text-gray-400 mb-8 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                      <FaGithub size={22} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
