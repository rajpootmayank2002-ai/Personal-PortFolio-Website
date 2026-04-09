import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Bachelor of Technology in Computer science',
    company: 'From Galgotias college of engineering and technology(AKTU)',
    date: '2023 - 2026',
    description: [
      'Focused on Data Structures, Algorithms, and Web Development fundamentals.',
      'Maintained a consistent GPA and participated in various technical workshops.',
      'Developed multiple minor and major projects as part of the curriculum.'
    ]
  },
  {
    role: 'Senior School (12th)',
    company: 'AVMD Institute Etmadpur, Agra',
    date: '2020- 2021',
    description: [
      'Completed class 12th with 91.2 percentage'
    ]
  },
  {
    role: 'High School (10th)',
    company: 'Jawahar Navodaya vidyalaya, Begaur Etah',
    date: '2018- 2019',
    description: [
      'Completed class 10th with 93.8 percentage'
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">
              <span className="text-primary text-2xl md:text-3xl mr-2">03.</span> Education
            </h2>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>

          <div ref={ref} className="relative border-l border-gray-700 ml-6 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-0 md:flex md:gap-8 items-start group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-21px] md:static md:w-16 md:flex-shrink-0 flex justify-center mt-1">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-lg z-10 md:mr-8 transform md:translate-x-[47px]">
                    <Briefcase size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/4 bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {exp.role} <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm font-mono text-gray-400 mb-6">{exp.date}</p>

                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-400 relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-lg">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
