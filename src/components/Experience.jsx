import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, ExternalLink, Eye, Award, FileText } from 'lucide-react';

const experiences = [
  {
    role: 'Data Analytics / Front End Web Development Intern',
    company: 'IBM SkillsBuild (CSRBOX)',
    date: 'June 2024 - August 2024',
    description: [
      'Successfully completed a 6-week intensive internship focusing on Data Analytics and Front End Web Development.',
      'Gained hands-on experience with the IBM SkillsBuild platform, completing curated technical and professional courses.',
      'Participated in expert-led masterclasses covering industry-relevant skills and design thinking principles.',
      'Developed practical knowledge through project-based learning and collaborative environments.'
    ],
    offerLetter: '/IBM SkillsBuild Internship Offer letter.pdf',
    completionLetter: '/certificateIBMIntern.pdf',
    thumbnail: "https://t4.ftcdn.net/jpg/01/32/10/01/240_F_132100149_rcEhGZI6dydtT6hU841L1G4boEGiGSvx.jpg"
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
              <span className="text-primary text-2xl md:text-3xl mr-2">04.</span> Experience
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
                className="mb-16 relative pl-8 md:pl-0 md:flex md:gap-8 items-start group"
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

                  <ul className="space-y-3 mb-8">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-400 relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-lg">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Documents Section */}
                  <div className="mt-8 border-t border-gray-700 pt-6">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <FileText size={18} className="text-primary" /> Credentials & Documents
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Offer Letter Card */}
                      <a
                        href={exp.offerLetter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-primary/50 hover:bg-gray-800 transition-all group/doc"
                      >
                        <div className="p-3 bg-gray-800 rounded-lg group-hover/doc:bg-primary/20 transition-colors">
                          <FileText size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">Offer Letter</p>
                          <p className="text-gray-500 text-xs">Official Invitation</p>
                        </div>
                        <ExternalLink size={14} className="ml-auto text-gray-600 group-hover/doc:text-primary transition-colors" />
                      </a>

                      {/* Completion Certificate Card */}
                      <a
                        href={exp.completionLetter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-primary/50 hover:bg-gray-800 transition-all group/doc"
                      >
                        <div className="p-3 bg-gray-800 rounded-lg group-hover/doc:bg-primary/20 transition-colors">
                          <Award size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">Completion Letter</p>
                          <p className="text-gray-500 text-xs">Final Certificate</p>
                        </div>
                        <ExternalLink size={14} className="ml-auto text-gray-600 group-hover/doc:text-primary transition-colors" />
                      </a>
                    </div>

                    {/* Preview (Optional) */}
                    <div className="mt-6 rounded-xl overflow-hidden border border-gray-700 relative group/preview cursor-pointer" onClick={() => window.open(exp.completionLetter, '_blank')}>
                      <img
                        src={exp.thumbnail}
                        alt="Internship Credential Preview"
                        className="w-full h-32 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 group-hover:bg-transparent transition-colors">
                        <span className="text-white font-mono text-xs font-bold px-3 py-1 border border-white/30 rounded-full backdrop-blur-sm flex items-center gap-2">
                          <Eye size={12} /> Click to View Completion Certificate
                        </span>
                      </div>
                    </div>
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

export default Experience;
