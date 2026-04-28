import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: 'Web Development Internship',
    issuer: 'IBM Skills Build',
    date: '5 july 2024',
    href: 'certificateIBMIntern.pdf',
    icon: <Award className="text-primary" />
  },
  {
    title: 'Java full stack course completion',
    issuer: 'Wipro TalentNext',
    date: ' july to October 2025',
    href: 'wipro certificate.pdf',
    icon: <Award className="text-primary" />
  },
  {
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy',
    date: '29 dec 2024',
    href: 'OracleCertificate.pdf',
    icon: <ShieldCheck className="text-blue-400" />
  },
  {
    title: 'Database Management System',
    issuer: 'Infosys Springboard',
    date: '29 dec 2024',
    href: 'springDbmscertificate.pdf',
    icon: <Award className="text-orange-400" />
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'IBM Skills Build',
    date: '10 may 2023',
    href: 'WebDevelopmentFundamentals.pdf',
    icon: <Award className="text-primary" />
  }
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">
              <span className="text-primary text-2xl md:text-3xl mr-2">06.</span> Certificates
            </h2>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>


          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary/50 hover:bg-gray-800 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <Award size={120} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-gray-900/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm font-medium mb-6">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>

                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-primary hover:text-orange-400 transition-colors group/link"
                    >
                      Verify
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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

export default Certificates;
